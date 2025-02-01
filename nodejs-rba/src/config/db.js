import mongoose from "mongoose";

const connectToDB = async (req, res) => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Connected to MongoDB: ${connection.host}, ${connection.name}`)
    } catch (error) {
        console.error("Error connecting to DB: ", error);
        process.exit(1);
    }
}

export default connectToDB;