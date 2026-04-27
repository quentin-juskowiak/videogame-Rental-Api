const API_URL = "http://localhost:3000";

const container = document.getElementById("servers-container");

async function fetchServers() {
  const serversResponse = await fetch(`${API_URL}/servers`);
  const servers = await serversResponse.json();

  const rentalsResponse = await fetch(`${API_URL}/rentals`);
  const rentals = await rentalsResponse.json();

  displayServers(servers, rentals);
}

function displayServers(servers, rentals) {
  container.innerHTML = "";

  servers.forEach((server) => {
    const activeRental = rentals.find(
      (rental) => rental.serverId === server.id && rental.status === "active"
    );

    const card = document.createElement("div");
    card.className = "server-card";

    card.innerHTML = `
      <h2>${server.name}</h2>
      <p><strong>Jeu :</strong> ${server.game}</p>
      <p><strong>RAM :</strong> ${server.ram}</p>
      <p><strong>Prix :</strong> ${server.price}€/mois</p>

      <span class="badge ${server.status}">
        ${server.status}
      </span>

      ${
        activeRental
          ? `<p><strong>Client :</strong> ${activeRental.clientName}</p>`
          : `<p><strong>Client :</strong> Aucun</p>`
      }

      ${
        server.status === "rented" && activeRental
          ? `<button class="cancel-btn" onclick="cancelRental(${activeRental.id})">
              Annuler la location
            </button>`
          : `<button onclick="rentServer(${server.id})">
              Louer ce serveur
            </button>`
      }
    `;

    container.appendChild(card);
  });
}

async function rentServer(serverId) {
  const clientName = prompt("Nom du client :");

  if (!clientName) return;

  await fetch(`${API_URL}/servers/${serverId}/rent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ clientName })
  });

  fetchServers();
}

async function cancelRental(rentalId) {
  await fetch(`${API_URL}/rentals/${rentalId}/cancel`, {
    method: "PATCH"
  });

  fetchServers();
}

fetchServers();