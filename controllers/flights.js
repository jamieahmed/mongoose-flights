import { Flight } from '../models/flight.js'

function index(req, res) {
    res.render('flights/index', {
        title: 'Flights Index'
    })
}

function newFlight(req, res) {
    res.render("flights/new", {
        title: "Add Flight"
    })
}

function create(req, res) {
    Flight.create(req.body)
        .then(flight => {
            res.redirect('/flights')
        })
        .catch(err => {
            res.redirect('/flights')
        })
}



export {
    index,
    newFlight as new,
    create

}