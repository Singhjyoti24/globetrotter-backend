const Destination = require('../models/Destination');

exports.evaluateAnswer = async (req, res) => {
    try {
        const { destination, answer } = req.body;

        if (!destination || !answer) {
            return res.status(400).json({ message: "Missing required fields: destination or answer" });
        }

        const correctDestination = await Destination.findOne({ city: destination });

        if (!correctDestination) {
            return res.status(404).json({ message: "Destination not found" });
        }

        const isCorrect = correctDestination.city.toLowerCase() === answer.toLowerCase();

        res.json({ correct: isCorrect, fun_fact: correctDestination.fun_fact });
    } catch (error) {
        console.error("Error evaluating answer:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
