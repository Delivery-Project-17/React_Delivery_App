const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ash:password1708@deliveryapp.rpfc5qz.mongodb.net/?retryWrites=true&w=majority&appName=DeliveryApp");

const customerSchema = new mongoose.Schema({
    name : {
        type:String
    },
    packageType : {
        type:String
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
});

module.exports = mongoose.model('Customer',customerSchema);