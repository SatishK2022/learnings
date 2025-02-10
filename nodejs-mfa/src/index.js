import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectToDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import "./config/passportConfig.js";
dotenv.config();

const app = express();


// DB Connection
connectToDB();

// Middlewares
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: false }));
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"));


// Routes
app.use("/api/auth", authRoutes);


app.route("/", (req, res) => {
    res.json({
        status: 200,
        message: "Welcome to MFA API"
    })
})

app.route("*", (req, res) => {
    res.json({
        status: 404,
        message: "Route not found"
    })
})

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})