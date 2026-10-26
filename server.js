const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { env } = require("./src/config/env");
const { connectDatabase } = require("./src/db/db");

const userRoutes = require("./src/routes/userRoutes");
const adminRoutes = require("./src/routes/adminRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDatabase();

app.use(
  cors({
    origin: ["http://localhost:5173/"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server working " });
});

app.listen(env.PORT, () => {
  console.log(`Server is working: ${env.PORT}`);
});
