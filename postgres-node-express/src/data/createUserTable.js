import pool from "../config/db.js";
import asyncHandler from "../utils/asyncHandler.js";

const createUserTable = asyncHandler(async (req, res) => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        )
    `

    await pool.query(queryText);
    console.log("User table created if not exists")
})

export default createUserTable;