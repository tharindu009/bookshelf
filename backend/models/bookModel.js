import { readDatabase, writeDatabase } from "../utils/fileUtils.js";

// this is a simple object with some functions!
const bookModel = {
  getAllBooks: async function () {
    const data = await readDatabase();
    return data.books;
  },

  getBookById: async function (id) {
    const data = await readDatabase();
    return data.books.find((book) => book.id === id);

  },

  // you can add the rest of the functions here for the model.


  // add a new book
  addBook: async function (book) {
    const data = await readDatabase();
    console.log(data.books.length);
    const maxId = data.books.length + 1;
    const newId = maxId.toString();
    const newBook = { id: newId, ...book };
    
    data.books.push(newBook);
    await writeDatabase(data);
    return newBook;
  },

  // update a book
  updateBook: async function (id, book) {
    const data = await readDatabase();
    //console.log(id);
    console.log(data.books);
    const index = data.books.findIndex((b) => b.id === id);
    console.log(index);

    if (index === -1) {
      throw new Error("Book not found");
    }
    data.books[index] = { ...data.books[index], ...book };
    await writeDatabase(data);
    return data.books[index];
  },


  // delete a book
  deleteBook: async function (id) {
    const data = await readDatabase();
    const index = data.books.findIndex((book) => book.id === id);
    if (index === -1) {
      throw new Error("Book not found");
    }
    const deletedBook = data.books.splice(index, 1);
    await writeDatabase(data);
    return deletedBook[0];
  },


};

export default bookModel;