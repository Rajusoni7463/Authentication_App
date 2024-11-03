import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(process.env.DB_URI);

        if (connectInstance) {
            console.log(`Database connected successfully ${connectInstance.connection.host}`);
        } else {
            console.log("Something went wrong");
        }
    } catch (err) {
        console.error("Error connecting to database:", err);
    }
};

export default connectDB;
