import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import templateRoutes from "./routes/template.routes";
import generationRoutes from "./routes/generation.routes";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app = express();
const port = 3000;

const swaggerDoc = YAML.load("./src/specs/apap.yaml");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

app.use("/templates", templateRoutes);
app.use("/generate", generationRoutes);

app.get("/", (_req, res) => {
  res.send("APAP Server is running!");
});

app.listen(port, () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
});
