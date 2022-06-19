import { Flight } from '../models/flight.js'

function index(req, res) {
    Flight.find({})
        .then(flights => {
            res.render('flights/index', {
                flights: flights,
                title: "All Flights"

            })
        })
        .catch(error => {
            console.log(error)
            res.redirect('/flights')
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

function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/flights")
        })
        .catch(err => {
            console.log(err)
            res.redirect("/")
        })
}


function show(req, res) {
    Flight.findById(req.params.id)
        .then(flight => {
            res.render('flights/show', {
                title: "Flight Detail",
                flight: flight,
            })
        })
        .catch(error => {
            console.log(error)
            res.redirect('/flights')
        })
}
function edit(req, res) {
    Flight.findById(req.params.id)
        .then(flight => {
            res.render("flights/edit", {
                flight: flight,
                title: "Edit Flight",
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect("/")
        })
}

function update(req, res) {
    Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(flight => {
            res.redirect(`/flights/${flight._id}`)
        })
        .catch(err => {
            console.log(err)
            res.redirect("/")
        })
}

export {
    index,
    newFlight as new,
    create,
    deleteFlight as delete,
    show,
    edit,
    update
}