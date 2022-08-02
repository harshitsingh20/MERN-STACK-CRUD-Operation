import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

// how our document look like
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  mobile: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user");

const user = mongoose.model("user", userSchema);

export default user;
