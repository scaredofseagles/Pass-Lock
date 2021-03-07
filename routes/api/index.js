const router = require('express').Router();
const userRoutes = require('./users');
const acctRoutes = require('./accounts');

router.use("/users", userRoutes);
router.use("/accounts", acctRoutes)

module.exports = router