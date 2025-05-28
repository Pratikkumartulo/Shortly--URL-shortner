import { cookieOptions } from "../config/cookieOption.js";
import { findUserById } from "../dao/userAuth.js";
import { verifyToken } from "../utils/helper.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return next();
    console.log("Token found:", token);
    try {
        const decoded = verifyToken(token);
        console.log(decoded);
        const user = await findUserById(decoded.id);
        console.log(user);
        if(!user) return next();
        req.user = user;
        next();
    } catch (err) {
        if(token){
            res.clearCookie("token", cookieOptions);
            console.error("Error verifying token:", err);
            return res.status(401).json({ message: "Unauthorized" });
        }
        next();
    }
}