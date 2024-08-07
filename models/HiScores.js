import {mongoose} from 'mongoose'


const guessImageSchema = new mongoose.Schema({
    name: String,
    hiScore: Number
})

export default  mongoose.model('guessImage', guessImageSchema)