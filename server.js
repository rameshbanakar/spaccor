const express=require("express")
const connectDb=require("./db")
const cors = require("cors");
const dotenv = require("dotenv");
const AuthRoute=require("./Routers/AuthRouter")
dotenv.config({ path: "./config/config.env" });
connectDb();
const app=express()
app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/api/users", AuthRoute);
app.listen(5000,()=>{console.log("Server started@5000")})