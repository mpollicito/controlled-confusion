const router = require("express").Router();
const gameRoutes = require("./api");

router.use("/api", gameRoutes);

module.exports = router;