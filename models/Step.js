const {Schema, model} = require('mongoose')

const schema = new Schema ({
    title: {type: String, required: true},
    points: [ new Schema({
                id: Number,
                value: String,
                checked: Boolean
            }) ],
    completed: Boolean
})

module.exports = model('Step', schema)