const { Booking } = require('../models/index');


class BookingRepository {

    constructor() {
        
    }

    async createBooking(data,transaction) {
        try {
            const booking = await Booking.create(data,transaction);
            return booking;
        } 
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async cancellBooking(data) {
        try {
            const booking = await Booking.destroy(data);
            return booking;
        } 
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getBooking(bookingId) {
        try {
            const booking = await Booking.findByPk(bookingId);
            console.log(booking);
            return booking
        } 
        catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = BookingRepository;