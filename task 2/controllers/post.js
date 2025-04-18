const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/Post');

const getPostsByUserId = async (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid Id' });
    }

    try {
        const userPosts = await Post.find({ userId });
        res.status(200).json(userPosts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
};

module.exports = { getPostsByUserId };