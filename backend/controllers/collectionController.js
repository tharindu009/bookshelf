import collectionModel from "../models/collectionModel.js";

const collectionController = {
  getAllCollections: async function (req, res) {
    try {
      const collections = await collectionModel.getAllCollections();
      res.json(collections);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // here you add the rest of bookController methods ...

  //get a collection by id
  getCollectionById: async function (req, res) {
    try {
      const collection = await collectionModel.getCollectionById(req.params.id);
      if (!collection) {
        return res.status(404).json({ error: "Collection not found" });
      }
      res.json(collection);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  },


  // add a new collection
  addCollection: async function (req, res) {
    try {
      const newCollection = await collectionModel.addCollection(req.body);
      res.status(201).json(newCollection);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  },

  // update a collection
  updateCollection: async function (req, res) {
    try {
      const updatedCollection = await collectionModel.updateCollection(
        req.params.id,
        req.body,
      );
      if (!updatedCollection) {
        return res.status(404).json({ error: "Collection not found" });
      }
      res.json(updatedCollection);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  },

  // delete a collection
  deleteCollection: async function (req, res) {
    try {
      const deletedCollection = await collectionModel.deleteCollection(
        req.params.id,
      );
      if (!deletedCollection) {
        return res.status(404).json({ error: "Collection not found" });
      }
      res.json(deletedCollection);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  },


  // get all books in a collection
  getBooksInCollection: async function (req, res) {
    try {
      const books = await collectionModel.getBooksInCollection(req.params.id);
      if (!books) {
        return res.status(404).json({ error: "Collection not found" });
      }
      res.json(books);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  },
};

export default collectionController;