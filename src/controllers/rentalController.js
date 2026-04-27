const servers = require("../data/servers");
const rentals = require("../data/rentals");

const getAllRentals = (req, res) => {
  res.json(rentals);
};

const cancelRental = (req, res) => {
  const rentalId = Number(req.params.id);

  const rental = rentals.find((r) => r.id === rentalId);

  if (!rental) {
    return res.status(404).json({ message: "Rental not found" });
  }

  if (rental.status === "cancelled") {
    return res.status(400).json({ message: "Rental already cancelled" });
  }

  rental.status = "cancelled";

  const server = servers.find((s) => s.id === rental.serverId);

  if (server) {
    server.status = "available";
  }

  res.json({
    message: "Rental cancelled successfully",
    rental,
    server
  });
};

module.exports = {
  getAllRentals,
  cancelRental
};