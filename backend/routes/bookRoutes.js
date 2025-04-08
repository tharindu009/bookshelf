import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

// define some routes for book controller
router.get("/", bookController.getAllBooks);

// implement the rest of the routes...

// get a book by id
router.get("/:id", bookController.getBookById);

// add a new book
router.post("/", bookController.addBook);

// update a book
router.put("/:id", bookController.updateBook);

// delete a book
router.delete("/:id", bookController.deleteBook);

export default router;