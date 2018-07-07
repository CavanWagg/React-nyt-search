const router = require("express").Router();
const booksController = require("../../controllers/articlesController");
// Matches with "/api/articles"
router.route("/")
  .post(booksController.create);




module.exports = router;