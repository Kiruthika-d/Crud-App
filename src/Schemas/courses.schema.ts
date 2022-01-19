import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema(
  {
    name: String,
    code: String,
    credit: Number,
  },
  {
    versionKey: false,
  },
);
