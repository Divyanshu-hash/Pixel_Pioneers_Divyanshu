import { Schema, model } from "mongoose";

const chatSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["general", "career", "mental_health", "technical"],
    },
  },
  { timestamps: true }
);

export const Chat = model("Chat", chatSchema);
