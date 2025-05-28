import { createUser, findUserByEmail } from "../dao/userAuth.js";
import AppError from "../utils/errorHandler.js";
import { generateToken,verifyPassword } from "../utils/helper.js";

export const registerUser = async (name, email, password) => {
  try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            throw new AppError('User already exists', 400);
        }
        const newUser = await createUser(name, email, password);
        const token = generateToken(newUser._id);
        return { user: newUser, token }
  }catch(error){
        console.log(error)
  }
};

export const loginUser = async (email, password) => {
    try{
        let user = await findUserByEmail(email);
        if (!user) {
            throw new AppError('Invalid User Credentials', 404);
        }
        const isMatch = await verifyPassword(password, user.password);
        if (!isMatch) {
            throw new AppError('Invalid User Credentials', 404);
        }
        console.log("user",user)
        const token = generateToken(user._id);
        return { user, token };
    }catch(error){
        console.log(error)
    }
}