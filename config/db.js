const mongoose = require('mongoose');
const { fetchAndStoreData } = require('./services/dataService');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('MongoDB Connected');
            fetchAndStoreData();
        }).catch(err => console.error('MongoDB connection error:', err));
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;