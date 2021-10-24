const router = require("express").Router();
const userRoutes = require("./users");
const acctRoutes = require("./accounts");
const sessionRoutes = require("./sessions");

router.use("/users", userRoutes);
router.use("/accounts", acctRoutes);
router.use("/sessions", sessionRoutes);

module.exports = router;
