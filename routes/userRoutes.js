const express = require('express');
const User = require('../models/User');
const router = express.Router();

// ✅ Register user and store score
router.post('/register', async (req, res) => {
    const { username, score } = req.body;

    if (!username) {
        return res.status(400).json({ success: false, message: 'Username is required' });
    }

    try {
        let user = await User.findOne({ username });

        if (user) {
            user.score = score;
            await user.save();
        } else {
            user = new User({ username, score });
            await user.save();
        }

        res.json({ success: true, message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error registering user', error });
    }
});

// ✅ Get inviter's score
router.get('/score/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, score: user.score });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching score', error });
    }
});

module.exports = router;
