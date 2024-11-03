import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        if (connectInstance) {
            console.log("Database connected successfully");
        } else {
            console.log("Something went wrong");
        }
    } catch (err) {
        console.error("Error connecting to database:", err);
    }
};

export default connectDB;
