import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import errorHandler from "./utils/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import dotenv from "dotenv";
dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

//  Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Routes
import userRoutes from "./routes/user.routes.js"

app.use("/api", userRoutes);

// Error Handling Middleware
app.use(errorHandler)

// Create tables
createUserTable();

// Test Postgres connection
app.get("/", async (req, res) => {
    const result = await pool.query('SELECT current_database()')
    res.send(`The database name is ${result.rows[0].current_database}`)
})

// Server Running
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})