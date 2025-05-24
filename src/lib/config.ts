import mongoose from "mongoose";
const connectMongoDB=async()=>{
    try{
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI environment variable is not defined.");
        }
        await mongoose.connect(mongoUri)
            .then(() => console.log("MongoDb Connected"))
            .catch((err) => console.error("Error connecting mongo", err));
    }
    catch(err){
        console.log("Connection error: ",err);
    }
}
export default connectMongoDB;

