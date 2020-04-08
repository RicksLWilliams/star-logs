import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Ship = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    captain: {type: String}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Ship;