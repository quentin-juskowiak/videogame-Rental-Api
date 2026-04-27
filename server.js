/* all routes :

GET {
  /servers
  /rentals
  /dashboard/stats
  /servers/:id/health
}

POST {
  /servers
  /servers/:id/rent
}

PATCH {
  /rentals/:id/cancel
}
*/

const app = require("./src/app");

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});