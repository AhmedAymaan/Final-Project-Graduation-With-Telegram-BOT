const express = require('express');
const router = express.Router();
const Appointments = require('../config/appiontments')

router.get('/all-appointments-for-doctor', Appointments.index)
router.post('/apponintment-by-patientname-for-doctor', Appointments.show)
router.post('/add-appointment-by-any-one', Appointments.store)
router.post('/delete-all-appointments-by-doctor-id', Appointments.destroy)

module.exports = router
