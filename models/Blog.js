const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    meta: {type: String, required: true},
    category: {type: String, required: true},
    content: {type: String, required: true},
    slug: {type: String, require: true, unique: true}
},{timestamps: true})
mongoose.models={};

export default mongoose.model('Blog',blogSchema);