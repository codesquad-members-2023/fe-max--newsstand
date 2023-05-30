import express from 'express';
import debugLib from 'debug';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';

const debug = debugLib('app:startup');
const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cookieParser());

app.get("/rolling-news", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.yna.co.kr/news?site=navi_latest_depth01"
    );
    if (response.status == 200) {
      const data = await response.text();
      const dom = parse(data);
      const news = Array.from(dom.querySelectorAll("a.tit-wrap")).map(
        (titWrap) => {
          return {
            href: titWrap.getAttribute("href"),
            textContent: titWrap.textContent.trim(),
          };
        }
      );
      res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
      res.json({ news });
    } else {
      throw new Error("fail");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000;
app.listen(port, () => debug(`Listening on port ${port}...`));