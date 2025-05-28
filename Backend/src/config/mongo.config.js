import mongoose from "mongoose"

const connectDB = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected to database !!'));
    }catch(e){
        console.log(e);
        process.exit(1);
    }

}

export default connectDB;