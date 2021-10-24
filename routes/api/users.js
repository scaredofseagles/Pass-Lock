const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/authorize").post(usersController.authorizeUser);

router.route("/").post(usersController.addUser);

router.route("/:email").get(usersController.getUser);

router
  .route("/:id")
  .put(usersController.editUser)
  .delete(usersController.removeUser);

module.exports = router;
