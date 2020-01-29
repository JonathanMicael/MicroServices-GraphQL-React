import bodyParser from "body-parser";

import cors from "cors";
import express from "express";

import acessEnv from "#root/helpers/accessEnv";

import setupRoutes from "./routes";

const PORT = acessEnv("PORT", 7100);

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
);

setupRoutes(app);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listings service listening on ${PORT}`);
});
