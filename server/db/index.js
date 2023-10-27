const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://admin:UIBE12345@cluster0.cc6kc.mongodb.net/food-ordering",{useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db