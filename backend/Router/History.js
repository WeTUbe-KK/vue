const express = require("express");
const router = express.Router();
const historyController = require("../Controller/historyController");

router.post("", historyController.add);
router.delete("/:id", historyController.remove);

module.exports = router;
