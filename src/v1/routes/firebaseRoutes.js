const { Router } = require("express");
const {
  getAllFirebaseDocuments,
} = require("../controllers/firebaseController");

// initialise api version1 express router
const v1Router = Router();

// sample get route to get all the documents from firebase
v1Router.get("/", getAllFirebaseDocuments);

module.exports = v1Router;
