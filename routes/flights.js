import { Router } from 'express'

const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)

// SHOW localhost:3000/flights/:id
router.get('/:id', flightsCtrl.show)
// localhost:3000/flights/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

// POST /flights
router.post('/', flightsCtrl.create)

router.post("/:id/tickets", flightsCtrl.createTicket)

//DELETE  localhost:3000/flights/:id 
router.delete("/:id", flightsCtrl.delete)

// localhost:3000/flight/:id
router.put("/:id", flightsCtrl.update)



export {
	router,
}