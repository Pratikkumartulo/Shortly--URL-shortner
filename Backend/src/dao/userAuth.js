import  User from '../models/user.model.js';
import AppError from '../utils/errorHandler.js';
import { generateHash } from '../utils/helper.js';
export const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw new AppError('Error finding user by email', 404);
  }
}


export const createUser = async (name, email, password) => {
  try {
    const hash = await generateHash(password);

    const newUser = new User({
      name,
      email,
      password: hash,
    });

    const user = await newUser.save();
    return user;
  } catch (error) {
    throw new AppError('Error creating user', 500);
  }
};

export const findUserById = async (id) => {
  try {
    return await User.findById(id);
  } catch (error) {
    throw new AppError('Error finding user by ID', 404);
  }
};
