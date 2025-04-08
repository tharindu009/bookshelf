import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";

const app = express();

// middlewares!
app.use(express.json());

app.use(cors());

// our routes!
app.use("/api/books", bookRoutes);
app.use("/api/collections", collectionRoutes);


app.get("/", (req, res) => {
  res.send(
    "Welcome to the bookshelf api! Use /api/books or /api/collections to access resources",
  );
});

// if our server detects an error, we can handle it!
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;