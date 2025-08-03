import mongoose from "mongoose";

export async function Connect_DB() {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/Clikn`);
    console.log(`MongoDb connected at host: ${conn.connection.host}`);
  } catch (error) {
    console.log("something went wrong while connecting DB", error);
    process.exitCode(1);
  }
}
