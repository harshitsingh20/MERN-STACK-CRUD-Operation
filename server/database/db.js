import mongoose from "mongoose";


const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.7cu00.mongodb.net:27017,cluster0-shard-00-01.7cu00.mongodb.net:27017,cluster0-shard-00-02.7cu00.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-1lgbo4-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error while connecting the database ", error);
  }
};

export default Connection;