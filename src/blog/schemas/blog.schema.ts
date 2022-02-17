import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema ({
    title: String,
    description: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    latitude: Number,
    longitude: Number,
    content: String,
    user: Object, //(ref to user ID)
    author: String,
    date_posted: String,
    image: String
});