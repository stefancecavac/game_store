const Game = require('../models/gameModel')
const mongoose = require('mongoose')

//get all games controller
const getGames = async(req, res) => {
    try{
        const game = await Game.find(req.query).sort({createdAt:-1})
        res.status(200).json(game)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

// get single game controller
const getGame = async(req ,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error:'not a valid ID'})
    }
    try{
        const game = await Game.findOne({_id : id})
        
        if(!game){
            return  res.status(404).json({error:'no game with that id'}) 
        }
        res.status(200).json(game)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//post game controller
const postGame = async(req ,res) => {
    try{     
        const game = await Game.create(req.body)
        res.status(200).json(game)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

//delete game controller
const deleteGame = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid({id})){
      return res.status(404).json({error:'not a valid ID'})
    }
    try{
        const game = await Game.findOneAndDelete({_id : id})
        
        if(!game){
           return res.status(404).json({error:'no game with that id'}) 
        }
        res.status(200).json(game)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//put game controller
const updateGame = async(req ,res ) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid({id})){
      return res.status(404).json({error:'not a valid ID'})
    }
    try{
        const game = await Game.findByIdAndUpdate({_id : id} , 
           {$set: req.body},
           {new:true} 
        )
        
        if(!game){
           return res.status(404).json({error:'no game with that id'}) 
        }
        res.status(200).json(game)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = {getGames ,getGame ,postGame ,deleteGame ,updateGame}