const mongoose = require('mongoose');

const SuperMarket = new mongoose.Schema({
    zipcode: {
        type: "Number",
        required: true
    },
    supermarket_type:{
        type: 'String',
        required: true
    },
    market_name: {
        type: 'String',
        required: true
    },
    property_address:{
        type:'String',
        required: true
    }
})

module.exports = mongoose.models.SuperMarket || mongoose.model('SuperMarket', SuperMarket);