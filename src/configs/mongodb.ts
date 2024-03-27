import mongoose from "mongoose";

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;
const connectMG = async () => {
    await mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin&retryWrites=true`).then(() => console.log("MongoDB Connected....")).catch(err => console.log('Connect MongoDB error: ' + err));  
}

export default connectMG;
