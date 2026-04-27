const servers = require("../data/servers");
const rentals = require("../data/rentals");

const getAllServers = (req, res) => {
  res.json(servers);
};

const createServer = (req, res) => {
  const newServer = {
    id: servers.length + 1,
    game: req.body.game,
    name: req.body.name,
    ram: req.body.ram,
    status: "available",
    price: req.body.price
  };

  servers.push(newServer);
  res.status(201).json(newServer);
};

const rentServer = (req, res) => {
  const serverId = Number(req.params.id);
  const { clientName } = req.body || {};

  const server = servers.find((s) => s.id === serverId);

  if (!server) {
    return res.status(404).json({ message: "Server not found" });
  }

  if (server.status === "rented") {
    return res.status(400).json({ message: "Server already rented" });
  }

  if (!clientName) {
    return res.status(400).json({ message: "clientName is required" });
  }

  server.status = "rented";

  const newRental = {
    id: rentals.length + 1,
    serverId: server.id,
    clientName,
    startDate: new Date().toISOString(),
    status: "active"
  };

  rentals.push(newRental);

  res.status(201).json({
    message: "Server rented successfully",
    rental: newRental
  });
};

const getServerHealth = (req, res) => {
  const serverId = Number(req.params.id);
  const server = servers.find((s) => s.id === serverId);

  if (!server) {
    return res.status(404).json({ message: "Server not found" });
  }

  const cpuUsage = Math.floor(Math.random() * 100);
  const ramUsage = Math.floor(Math.random() * 100);

  let healthStatus = "healthy";

  if (cpuUsage > 80 || ramUsage > 80) {
    healthStatus = "critical";
  } else if (cpuUsage > 60 || ramUsage > 60) {
    healthStatus = "warning";
  }

  res.json({
    serverId: server.id,
    name: server.name,
    cpuUsage,
    ramUsage,
    status: healthStatus
  });
};

module.exports = {
  getAllServers,
  createServer,
  rentServer,
  getServerHealth
};