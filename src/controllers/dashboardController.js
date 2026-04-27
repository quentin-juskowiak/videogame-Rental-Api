const servers = require("../data/servers");
const rentals = require("../data/rentals");

const getStats = (req, res) => {
  const totalServers = servers.length;
  const availableServers = servers.filter((s) => s.status === "available").length;
  const rentedServers = servers.filter((s) => s.status === "rented").length;

  const totalRentals = rentals.length;
  const activeRentals = rentals.filter((r) => r.status === "active").length;

  const totalRevenue = rentals
    .filter((r) => r.status === "active")
    .reduce((total, rental) => {
      const server = servers.find((s) => s.id === rental.serverId);
      return total + (server ? server.price : 0);
    }, 0);

  res.json({
    totalServers,
    availableServers,
    rentedServers,
    totalRentals,
    activeRentals,
    totalRevenue
  });
};

module.exports = {
  getStats
};