import { FreshApp } from "../../../src/app.ts";

const app = new FreshApp({ staticDir: "./static" }).get(
  "/",
  (ctx) =>
    ctx.render(
      <html>
        <head>
          <meta charset="utf-8" />
          <title>foo</title>
        </head>
        <body>
          <div f-client-nav>
            <span f-client-nav={false}>
              <p>false</p>
            </span>
            <a href="/">Home</a>
            <img src="/foo.jpg" alt="" />
            <picture>
              <source src="/bar.jpg" />
            </picture>
          </div>
        </body>
      </html>,
    ),
);

const handler = await app.handler();
const res = await handler(new Request("http://localhost/"));
console.log(await res.text());
