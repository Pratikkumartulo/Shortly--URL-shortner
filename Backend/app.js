import express from 'express';
import dotenv from 'dotenv';
dotenv.config("./.env");
import connectDB from './src/config/mongo.config.js';
import short_Url from './src/routes/shortUrl.route.js';
import auth_route from './src/routes/auth.route.js';
import user_route from './src/routes/user.route.js';
import { redirectFromUrl } from './src/controller/shortUrl.controller.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { attachUser } from './src/utils/attachUser.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  // your frontend origin
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser);

app.get("/:id",redirectFromUrl);
app.use("/user",user_route); // This route is for user profile and other user-related operations
app.use("/api/user", auth_route);
app.use("/api/create",short_Url);

app.listen(3000,()=>{
    connectDB();
    console.log("Server is listening at port http://localhost:3000");
})
