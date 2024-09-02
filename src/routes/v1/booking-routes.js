const express = require('express');

const { BookingController } = require('../../controllers/index');

const router = express.Router();
router.post('/', BookingController.createBooking);
router.get('/:id', BookingController.getBooking);

module.exports = router;