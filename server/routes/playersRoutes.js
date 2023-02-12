import { getFreeAgents, getLakers, getMavs, getCeltics, updateFreeAgents,addLaker,addCeltic,addMav} from "../controllers/players.js";
import express from "express";
const router = express.Router()

router.get('/freeAgents', getFreeAgents)
router.get('/lakers', getLakers)
router.get('/mavs', getMavs)
router.get('/celtics', getCeltics)

router.post('/addToLakers', addLaker)
router.post('/addToMavs', addMav)
router.post('/addToCeltics', addCeltic)
router.post('/updateFreeAgents', updateFreeAgents)



export default router