import mongoose from "mongoose";

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0,
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        required: true,
        default: 'DEN',
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: () => {
            const today = new DataView()
            const oneYear = today.getFullYear() + 1
            today.setFullYear(oneYear)
            return today
        }
    },
    tickets: [ticketSchema],
    meals: [{ type: Schema.Types.ObjectId, ref: 'Meal' }]


})
const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}


//  note make sure line 14 default