const mongoose = require('mongoose');

mongoose.connect('mongodb:mongodb+srv://jacey:baby@cluster0.njkkogx.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB connection successful'))
.catch((err) => console.log(err));


const {Schema} = mongoose;

const dayEntry = new Schema({
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
const Entry = mongoose.model('entry',dayEntry);
module.exports = Entry;