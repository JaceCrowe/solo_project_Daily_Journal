const mongoose = require('mongoose');

try {
     mongoose.connect('mongodb:mongodb+srv://jacey:baby@cluster0.njkkogx.mongodb.net/?retryWrites=true&w=majority')
} catch (error) {
    handleError(error);
}
const {Schema} = mongoose;
const ObjectId = Schema.ObjectId;

const DayEntry = new Schema({
    date: {
        type: String,
        required: true,
    },
    inDepthValue: String,
    formValues: [{memory: String},],
    tags: String,
    tomorrowsFive: String,
    tomValue : [String]
})

module.exports = mongoose.model('DayEntry',DayEntry);