const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        enum:['action' , 'adventure' , 'rpg' , 'arcade' , 'fighting' , 'racing'],
        required:true
    },
    type:{
        type:String,
        enum:['singleplayer' , 'multiplayer' ],
        required:true
    },
    platform:{
        type:String,
        enum:['pc' , 'Xbox' ,'playstation'],
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timeStamps:true})

module.exports = mongoose.model('Game' , gameSchema)