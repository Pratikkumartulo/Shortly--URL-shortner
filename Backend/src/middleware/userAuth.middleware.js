import { findUserById } from "../dao/userAuth.js";
import { verifyToken } from "../utils/helper.js";

export const verifyUser = async(req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized |||||" });
    }
    try {
        console.log(token);
        const decoded = verifyToken(token);
        console.log(decoded);
        const user = await findUserById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "User not found |||||" });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: err.message || "Unauthorized |||||" });
    }
}