const express = require("express");
const router = express.Router();

const serverController = require("../controllers/serverController");

router.get("/", serverController.getAllServers);
router.post("/", serverController.createServer);
router.get("/:id", serverController.getServerById);
router.post("/:id/rent", serverController.rentServer);
router.get("/:id/health", serverController.getServerHealth);

module.exports = router;