// require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

          console.log('MongoDb connected');
    }
    catch(err) {
        console.log('MongoDb failed');
        process.exit(1);
    }
}

module.exports = connectDb;