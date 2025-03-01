const User = require('../models/User');
exports.registerUser = async (req, res) => {
    const { username } = req.body;
    let user = await User.findOne({ username });
    if (!user) {
        user = new User({ username });
        await user.save();
    }
    res.json(user);
};