const PostModel = require("../models/post.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const createPost = async (req, res) => {
    const { title, content } = req.body;

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({ _id: decoded.id });
        const post = await PostModel.create({ title, content, user: user._id });
        user.posts.push(post._id);
        await user.save();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
    // const post = await PostModel.create({ title, content });

    res.status(201).json({
        message: "Post created successfully",
        // post: post
    })



}

module.exports = { createPost }