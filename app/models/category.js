var mongoose = require('mongoose');

module.exports = mongoose.model('Category', {
    name : String,
    group : String
});