const router = require("express").Router();
const accountController = require("../../controllers/accountController");

router.route("/:userid").get(accountController.getAccounts);

router.route("/").post(accountController.addAccount);

router
  .route("/:id")
  .put(accountController.editAccount)
  .delete(accountController.removeAccount);

module.exports = router;
