import express from "express";
import path from "path";
import ejs from "ejs";
import { createServer as createViteServer } from "vite";

async function createServer() {
  const port = 5173;
  const app = express();

  // Configure view engine
  app.set("views", path.resolve(__dirname, "views"));
  app.set("view engine", "ejs");

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // Use Vite's middleware
  app.use(vite.middlewares);

  // Handle all routes
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Render EJS template to HTML
      ejs.renderFile(
        path.resolve("src", "views", "index.ejs"),
        { title: "Hello World" },
        async (err, htmlTemplate) => {
          if (err) {
            console.error("Failed to render EJS template", err);
            return;
          }

          const viteTransformedTemplate = await vite.transformIndexHtml(
            url,
            htmlTemplate
          );

          const { render } = await vite.ssrLoadModule(
            "/src/ts/entry-server.ts"
          );

          const appHtml = await render(url);

          // Inject the rendered HTML into the template
          const finalHtml = viteTransformedTemplate.replace(
            `<!--ssr-outlet-->`,
            appHtml
          );

          // Send the result
          res.status(200).set({ "Content-Type": "text/html" }).end(finalHtml);
        }
      );
    } catch (e: any) {
      if (vite) {
        vite.ssrFixStacktrace(e);
      }

      console.error("Error occurred:", e);

      // Handle error response or add other error handling logic
      next(e);
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
}

createServer();
