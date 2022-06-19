import mongoose from "mongoose";

const Schema = mongoose.Schema

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
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();
            let time = time.getHour();
            return new Date(year + 1, month, day,time)
        }
    },
})
const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}


//  note make sure line 14 default