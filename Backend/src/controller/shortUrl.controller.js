import {saveShortUrlWithoutUser, saveShortUrlWithUser} from "../services/shortUrl.service.js";
import { findUrlFromShort } from "../dao/shortUrl.js";

export const createShortUrl = async (req,res)=>{
    const {url,slug} = req.body;
    let short_Url;
    if(req.user){
        short_Url = await saveShortUrlWithUser(url,req.user._id,slug);
    }else{
        short_Url = await saveShortUrlWithoutUser(url)
    }
    res.status(200).json({shortUrl : process.env.APP_URL + short_Url});
}

export const redirectFromUrl = async (req,res)=>{
    const {id} = req.params
    const url = await findUrlFromShort(id);
    if(url){
        let fullUrl = url.full_url;
        if (!/^https?:\/\//i.test(fullUrl)) {
            fullUrl = 'https://' + fullUrl;
        }
        res.redirect(fullUrl);
    }else{
        res.status(404).send("Not found !")
    }
}