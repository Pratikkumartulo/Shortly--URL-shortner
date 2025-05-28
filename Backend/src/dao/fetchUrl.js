import shortUrl from "../models/shorturl.model.js"
import AppError from "../utils/errorHandler.js";

export const getAllUrlsByUser = async (userId) => {
    try{
        const response = await shortUrl.find({ user: userId });
        return response;
    }catch(err){
        throw new AppError('Failed to fetch URLs for the user. Please try again later.', 500);
    }
}