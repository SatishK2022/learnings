import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import errorHandler from "./utils/errorHandler.js";
import authRoutes from "./routes/auth.routes.js";
import userRouters from "./routes/user.routes.js";
dotenv.config();

const app = express();

// DB Connection
connectToDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRouters);

// Error Handler
app.use(errorHandler);

app.get("/", (_, res) => {
    res.send({
        status: 200,
        message: "Welcome to Role Based Authentication API"
    })
})

app.get("*", (_, res) => {
    res.send({
        status: 404,
        message: "Route not found"
    })
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})