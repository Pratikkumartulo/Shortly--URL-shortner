import { generateNanoId } from "../utils/helper.js";
import { getShortUrlByUser, saveUrl } from "../dao/shortUrl.js";
import AppError from "../utils/errorHandler.js";

export const saveShortUrlWithoutUser = async (url) => {
    const short_Url = generateNanoId(7);
    await saveUrl(url,short_Url)
    return short_Url;
}

export const saveShortUrlWithUser = async (url,userId,slug=null) => {
    const short_Url = slug ||  generateNanoId(7);
    console.log("short_Url",short_Url)
    const existingUrl = await getShortUrlByUser(short_Url);
    console.log(existingUrl)
    if (existingUrl.length > 0) {
        throw new AppError('Short URL already exists. Try generating a new one.', 400);
    }
    await saveUrl(url,short_Url,userId,slug)
    return short_Url;
}