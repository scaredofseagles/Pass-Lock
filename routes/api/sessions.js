const router = require("express").Router();
const sessionController = require("../../controllers/sessionController");

router
  .route("/")
  .get(sessionController.getCurrentSession)
  .post(sessionController.addSession);

router
  .route("/:userid")
  .get(sessionController.checkSession)
  .patch(sessionController.editSession)
  .delete(sessionController.removeSession);

module.exports = router;
