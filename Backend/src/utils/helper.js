import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import AppError from "./errorHandler.js";
import bcrypt from "bcrypt";


export const generateNanoId = (length)=>{
    return nanoid(length);
}

export const generateToken = (userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return token;
}

export const verifyToken = (token) => {
    try {
        console.log("Verifying token:", token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        return decoded;
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            throw new AppError(error.message, 401);
        }
        throw new AppError('Invalid token', 401);
    }
}

export const generateHash = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

export const verifyPassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}


