import urlSchema from "../models/shorturl.model.js";
import AppError from "../utils/errorHandler.js";

export const saveUrl = async (url, short_Url, userId) => {
  const newUrl = new urlSchema({
    full_url: url,
    short_url: short_Url,
  });
  if (userId) {
    newUrl.user = userId;
  }
  try {
    await newUrl.save();
  } catch (err) {
    if (err.code === 11000 && err.keyPattern?.short_url) {
      throw new AppError('Short URL already exists. Try generating a new one.', 403);
    }
    throw new AppError('Failed to save the URL. Please try again later.', 500);
  }
};

export const findUrlFromShort = async(id)=>{
    const url = await urlSchema.findOneAndUpdate({short_url:id},{$inc:{clicks:1}});
    if (!url) {
        return next(new AppError('URL not found', 404));
    }
    return url;
}

export const getShortUrlByUser = async (slug) => {
  return await urlSchema.find({short_url: slug});
}