const axios = require('axios');

const { BookingRepository } = require('../repositories/index')
const { serverConfig } = require('../config/index');
const db = require('../models/index');

class BookingService {

    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(newBookingInfo) {
        try {
            let { flightId, totalSeat } = newBookingInfo;
    
            return await db.sequelize.transaction(async function (transaction){
                // Get flight details
                const getFlightDetailsUrl = `${serverConfig.flightAndSearchServiceURL}/flights/${flightId}`;
                const { data: { data: flight } } = await axios.get(getFlightDetailsUrl);
                if (!flight) {
                    throw new Error('Invalid flight Id');
                }
                const { totalSeat: availableSeats, price: seatPrice } = flight;
                if (availableSeats < totalSeat) {
                    throw new Error('Seats Not Available');
                }
                const price = seatPrice * totalSeat;
                // Create the booking within the transaction
                const booking = await this.bookingRepository.createBooking(
                    { ...newBookingInfo, price}, transaction
                );
                if (booking) {
                    // Update the flight seats
                    const updateSeatFlightUrl = `${serverConfig.flightAndSearchServiceURL}/flights/${flightId}/seats`;
                    await axios.patch(updateSeatFlightUrl, { seats: totalSeat });
                }
                return booking;
            }.bind(this));
        } catch (error) {
            console.error('Booking service error: createBooking', error);
            throw error;
        }
    }

    async getBooking(bookingId) {
        try {
            const booking = await this.bookingRepository.getBooking(bookingId);
            return booking;
        } 
        catch (error) {
            console.error('Booking service error: getBooking', error.message || error);
            throw error;
        }
    }
    
    
    
}

module.exports = BookingService;