const express = require("express");
const v1Router = require("./v1/routes/firebaseRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// testing route
app.get("/", (req, res) => {
  res.json({
    name: "test",
    message: "staybook express api is working",
  });
});

// middelware to parse the json request body similar to body-parser
app.use(express.json());

// use v1Router by default
app.use("/api/v1/hotels", v1Router);

// listen to the app on the specified port
app.listen(PORT, () => {
  console.log(`Api is live on port http://localhost:${PORT}`);
});
