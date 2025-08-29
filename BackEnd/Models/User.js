const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = new schema({
  name: {
    required: true,
    type: String,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    required: true,
    type: String,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
