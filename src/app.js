import express from "express";
import averageRoutes from "./routes/averageRoutes.js";

const app = express();

app.use(express.json());

app.use("/", averageRoutes);

export default app;