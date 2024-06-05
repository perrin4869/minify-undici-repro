import { Server, createServer } from "node:http";
import { promisify } from "node:util";
import { request } from "undici";

Server.prototype.listenAsync = promisify(Server.prototype.listen);

await createServer((_, res) => {
  res.end(
    JSON.stringify({
      foo: "barttt",
    }),
  );
}).listenAsync(6000);

const res = await request("http://localhost:6000");
console.log(await res.body.text())
