import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

config();

app.use(express.json()); // to parse incomings requests with JSON payloads (from req.body)
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     root route http://localhost:5000/
//     res.send("Hello worlds")
// });


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on this ${PORT}`)
});