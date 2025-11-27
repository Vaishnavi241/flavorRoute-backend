import express from "express";
import cors from "cors";
import { connectDB } from "../config/db.js";
import foodRouter from "../routes/foodRoute.js";
import userRouter from "../routes/userRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoute.js";
import 'dotenv/config';

const app = express();

// CORS FIX
app.use(cors({
    origin: ["http://localhost:5173", "https://flavor-route-frontend.vercel.app"],
    credentials: true
}));

app.use(express.json());

// DB
connectDB();

// API ROUTES
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("Backend API working");
});

// VERY IMPORTANT:
export const handler=serverless(app)
export default app;