import mongoose, { Document, Schema } from 'mongoose';
export interface ICourse extends Document {
  title: string;
  description: string;
  instructor: mongoose.Types.ObjectId;
  category: string;
  price: number;
  published: boolean;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
const courseSchema: Schema<ICourse> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    published: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);
export default mongoose.model<ICourse>('Course', courseSchema);