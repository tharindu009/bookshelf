import bookModel from "../models/bookModel.js";

const bookController = {
  getAllBooks: async function (req, res) {
    try {
      const books = await bookModel.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // here you add the rest of bookController methods ...


  //get a book by id
  getBookById: async function (req, res) {
    try {
      const book = await bookModel.getBookById(req.params.id);
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(book);
    }
    catch (error) {
      console.error(error.mnessage);
      res.status(500).json({ error: error.message });
    }
  },

  // add a new book
  addBook: async function (req, res) {
    try {
      //console.log(req.body);
      const newBook = await bookModel.addBook(req.body);
      res.status(201).json(newBook);
    }
    catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  },

  // update a book
  updateBook: async function (req, res) {
    try {
      const updatedBook = await bookModel.updateBook(req.params.id, req.body);
      console.log(req.body);
      if (!updatedBook) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(updatedBook);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  },

  // delete a book
  deleteBook: async function (req, res) {
    try {
      const deletedBook = await bookModel.deleteBook(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(deletedBook);
      console.log("Book Deleted");
    }
    catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  },

};

export default bookController;