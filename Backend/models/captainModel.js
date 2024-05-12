const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ash:password1708@deliveryapp.rpfc5qz.mongodb.net/?retryWrites=true&w=majority&appName=DeliveryApp");

const captainSchema = new mongoose.Schema({
    name : {
        type:String,
    },
    from : {
        type:String
    },
    to : {
        type:String
    },
    date : {
        type:String
    },
    time : {
        type:String
    },
    medium : {
        type:String
    },
});

module.exports = mongoose.model('Captain',captainSchema);