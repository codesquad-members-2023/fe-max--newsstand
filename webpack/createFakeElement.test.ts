import { render, createFakeElement } from "./src/utils/createFakeElement";

test('createFakeElement("div") to equal div', async () => {
  const div = await render(createFakeElement("div"));
  expect(div.tagName).toBe("DIV");
});
