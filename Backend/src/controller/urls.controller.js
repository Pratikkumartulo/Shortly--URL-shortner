import { getAllUrlsByUser } from "../dao/fetchUrl.js";

export const getUsersAllUrls = async (req, res) => {
    const userId = req.user._id;
    try{
        const urls = await getAllUrlsByUser(userId);
        res.status(200).json({
            status: 'success',
            data: {
                urls
            }
        });
    }catch(err){
        res.status(err.statusCode || 500).json({
            status: 'error',
            message: err.message || 'An error occurred while fetching URLs.'
        });
    }
}