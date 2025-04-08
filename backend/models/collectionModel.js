import { readDatabase, writeDatabase } from "../utils/fileUtils.js";

// this is a simple object with some functions!
const collectionModel = {
  getAllCollections: async function () {
    const data = await readDatabase();
    return data.collections;
  },

  getCollectionById: async function (id) {
    const data = await readDatabase();
    return data.collections.find((collection) => collection.id === id);
  },

  // you can add the rest of the functions here for the model.

  // add a new collection 
  addCollection: async function (collection) {
    const data = await readDatabase();
    const maxId = data.collections.length + 1;
    const newId = maxId.toString();
    const newCollection = { id: newId, ...collection };

    data.collections.push(newCollection);
    await writeDatabase(data);
    return newCollection;
  },


  // update a collection
  updateCollection: async function (id, collection) {
    const data = await readDatabase();
    const index = data.collections.findIndex((c) => c.id === id);

    if (index === -1) {
      throw new Error("Collection not found");
    }
    data.collections[index] = { ...data.collections[index], ...collection };
    await writeDatabase(data);
    return data.collections[index];
  },


  // delete a collection
  deleteCollection: async function (id) {
    const data = await readDatabase();
    const index = data.collections.findIndex((collection) => collection.id === id);
    if (index === -1) {
      throw new Error("Collection not found");
    }
    const deletedCollection = data.collections.splice(index, 1);
    await writeDatabase(data);
    return deletedCollection[0];
  },

  // get all books in a collection
  getBooksInCollection: async function (id) {
    const data = await readDatabase();
    const collection = data.collections.find((collection) => collection.id === id);
    if (!collection) {
      throw new Error("Collection not found");
    }
    return collection.books;
  },
  
};

export default collectionModel;