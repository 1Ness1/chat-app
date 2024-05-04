import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/users.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

config();

app.use(express.json()); // to parse incomings requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", usersRoutes);

// app.get("/", (req, res) => {
//     root route http://localhost:5000/
//     res.send("Hello worlds")
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on this ${PORT}`);
});
