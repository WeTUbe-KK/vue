const express = require("express");
const router = express.Router();
const playListController = require("../Controller/playListController");

router.get("", playListController.index);
router.post("/:id", playListController.add);
router.delete("/:id", playListController.remove);

module.exports = router;
