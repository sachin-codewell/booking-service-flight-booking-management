const { BookingService } = require('../services/index')

const bookingService = new BookingService();

async function createBooking(req,res) {
    try { 
       const booking = await bookingService.createBooking(req.body);
       return res.status(201).json({
        success: true,
        data: booking,
        error: {},
        message: "booking created successfully"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in booking controller: createBooking');
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "Booking not created"
        });
    }
}

async function getBooking(req,res) {
    try { 
       const booking = await bookingService.getBooking(req.params.id);
       return res.status(200).json({
        success: true,
        data: booking,
        error: {},
        message: "fetch specific flight details successfully"
       }) 
    } 
    catch (error) {
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "Not able to fetch flight details"
        });
    }
}

module.exports = {
    createBooking,
    getBooking
}