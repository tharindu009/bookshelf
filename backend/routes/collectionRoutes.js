import express from "express";
import collectionController from "../controllers/collectionController.js";

const router = express.Router();

// define some routes for book controller
router.get("/", collectionController.getAllCollections);

// implement the rest of the routes...

// get a collection by id
router.get("/:id", collectionController.getCollectionById);

// add a new collection
router.post("/", collectionController.addCollection);

// update a collection
router.put("/:id", collectionController.updateCollection);

// delete a collection
router.delete("/:id", collectionController.deleteCollection);

// get all books in a collection
router.get("/:id/books", collectionController.getBooksInCollection);

export default router;