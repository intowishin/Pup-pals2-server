const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    profilePicture: {
      type: String,
      // required: [true, '']
    },
    name: {
      type: String,
      unique: true,
      required: [true, "Name is required"],
    },
    age: { type: Number, min: [0, "Age must be greater than 0"], max: 20 },
    size: {
      type: String,
      enum: ["miniature", "small", "medium", "large", "very large"],
    },
    gender: { type: String, enum: ["male", "female"] },
    breed: { type: String, required: [true, "Breed is required"] },
    about: { type: String, required: [true, "About is required"] },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Dog = model("Dog", dogSchema);

module.exports = Dog;
