import { cookieOptions } from "../config/cookieOption.js";
import { findUserById } from "../dao/userAuth.js";
import { verifyToken } from "../utils/helper.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return next();
    try {
        const decoded = verifyToken(token);
        const user = await findUserById(decoded.id);
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