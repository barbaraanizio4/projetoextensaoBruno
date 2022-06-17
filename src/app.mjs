import express from "express";
import router from "./routes/index.mjs";


const app = express();

app.use(express.json());

router(app);

export default app;