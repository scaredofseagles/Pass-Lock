const router = require('express').Router
const usersController = require('../../controllers/usersController')

router.route("/")
    .get(usersController.findAll)
    .post(usersController.addOne)

router
    .route("/:id")
    .update(usersController.updateOne)
    .delete(usersController.removeOne)

module.exports = router