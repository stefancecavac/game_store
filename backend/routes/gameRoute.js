const express = require('express')
const router = express.Router()

const {getGames ,getGame ,postGame ,deleteGame, updateGame} = require('../controllers/gameController')


//game routes

router.get('/',getGames)
router.get('/:id',getGame)
router.post('/',postGame)
router.put('/:id',updateGame)
router.delete('/:id',deleteGame)


module.exports = router