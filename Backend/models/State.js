const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 2. maxLength: 2 },
    tax: { type: Number, required: true },
    tuitionAssistanceProgram:  { type: Boolean, required: true },
},
{
    timestamps: true
})

const State = mongoose.model('State', stateSchema)
module.exports= State;