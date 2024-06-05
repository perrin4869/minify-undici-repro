import { createServer } from "node:http";
import { request } from "undici";

createServer((_, res) => {
  res.end(
    JSON.stringify({
      foo: "barttt",
    }),
  );
}).listen(6000);


request("http://localhost:6000").then(async (res) => {
  console.log(await res.body.text());
});
