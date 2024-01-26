import mongoose, { Document, Schema } from 'mongoose';

interface IChat extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  message: string;
  timestamp: Date;
}

const chatSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.models.Chat || mongoose.model<IChat>('Chat', chatSchema);

export default Chat;
