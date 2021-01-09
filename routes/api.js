const router = require("express").Router();
const gameController = require("../controllers/gameController");


router.route("/")
.get(gameController.listAll)
.post(gameController.create)


});



module.exports = router;