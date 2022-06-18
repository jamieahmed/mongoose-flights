import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /movies/new
router.get('/new', flightsCtrl.new)


// POST /flight
router.post('/', flightsCtrl.create)

router.get('/', flightsCtrl.index)



export {
	router,
}