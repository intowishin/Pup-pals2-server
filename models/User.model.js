const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    password: String,
    profilePicture: {
      type: String,
      default: "https://res.cloudinary.com/dticyzm8v/image/upload/v1650121606/profile-picture2_lpzldl.jpg",
    },
    name: String,
    age: Number,
    gender: { type: String, enum: ["Male", "Female"] },
    about: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
