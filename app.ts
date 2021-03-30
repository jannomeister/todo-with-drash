import { server } from "./server.ts";
import { HOSTNAME, PORT } from "./constants.ts";

server.run({
  hostname: HOSTNAME,
  port: PORT,
});

console.log(`Drash server running on ${HOSTNAME}:${PORT}`);
