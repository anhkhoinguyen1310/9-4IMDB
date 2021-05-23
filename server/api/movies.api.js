var express = require("express");
var router = express.Router();

const movieController = require("../controllers/movies.controller");

router.get("/", movieController.list);
router.get("/search", movieController.searchByTilte);
router.post("/", movieController.create);
router.patch("/:id", movieController.update);
router.delete("/:id", movieController.delete);

module.exports = router;
 