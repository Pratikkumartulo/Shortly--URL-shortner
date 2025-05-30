import { verifyToken } from "../utils/helper.js";
import { findUserById } from "../dao/userAuth.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({ message: "Unauthorized s" });
    try{
        const decoded = verifyToken(token);
        const user = await findUserById(decoded.id);
        if(!user) return res.status(401).json({ message: "Unauthorized d" });
        req.user = user;
        next();
    }
    catch(errr){
        console.error("Error verifying token:", errr);
        return res.status(401).json({ message: "Unauthorized" });
    }
}