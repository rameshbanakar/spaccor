const express=require("express")
const connectDb=require("./db")
const cors = require("cors");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const AuthRoute=require("./Routers/AuthRouter")
dotenv.config({ path: "./config/config.env" });
const morgan = require("morgan");
connectDb();

const app=express()
app.use(cookieParser());
app.use(express.json());
app.use(mongoSanitize());
app.use(helmet());
//cross site scriptinng
app.use(xss());
app.use(hpp());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
//app.use("/",(req,res)=>console.log("Home page backend"))
app.use(cors(corsOptions));
app.use("/api/users", AuthRoute);
app.listen(5000,()=>{console.log("Server started@5000")})