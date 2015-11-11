var mongoose = require('mongoose');

module.exports = mongoose.model('Ad', {
    type : String,
    name : String,
    email : String,
    allow_mails : Boolean,
    contact_number : String,
    category : String,
    city : String,
    title : String,
    description : String,
    price : String
});
