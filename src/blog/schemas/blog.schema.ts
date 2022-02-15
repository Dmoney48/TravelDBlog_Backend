import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema ({
    name: String,
    message: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    latitude: Number,
    longitude: Number,
    comment: Array, //(refs to blogs uniqueId)
    user: Object, //(ref to user ID)
    author: String,
    date_posted: String
});