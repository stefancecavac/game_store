const express = require('express')
const router = express.Router()

const {getGames ,getGame ,postGame ,deleteGame, updateGame} = require('../controllers/gameController')
const authentication = require('../middlewares/authentication')
const authorize = require('../middlewares/authorization')

//game routes




router.get('/',getGames)
router.get('/:id',getGame)


router.use(authentication)
router.use(authorize)
router.post('/',postGame)
router.put('/:id',updateGame)
router.delete('/:id',deleteGame)


module.exports = router