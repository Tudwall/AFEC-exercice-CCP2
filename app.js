import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => console.info(`server running on ${PORT}`));
