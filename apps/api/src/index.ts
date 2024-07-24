import { createServer } from "./server";
import { log } from "@repo/logger";
import healthCheckRouter from './routes/health-check';
import { json, urlencoded } from "body-parser";

const port = process.env.PORT || 3001;
const server = createServer();

server.use(json({ limit: '50mb' }));
server.use(urlencoded({ limit: '50mb' }));

server.use("/api", json(), healthCheckRouter);

server.listen(port, () => {
  log(`api running on ${port}`);
});
