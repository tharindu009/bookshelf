import React, { useState, useEffect } from 'react'
import CollectionList from '../components/CollectionList'
import axios from 'axios';

const Books = () => {



  console.log("Book Page");

  const [books, setBooks] = useState([]);

  const getAllBooks = async (collectionId = null) => {
    try {

      const url = collectionId ? "http://localhost:3000/api/books?collectionId=" + { collectionId }
        : "http://localhost:3000/api/books";
      const { data } = await axios.get("http://localhost:3000/api/books");

      //console.log(data);
      setBooks(data);

    } catch (error) {
      console.log(error.message);

    }
  }

  useEffect(() => {
    getAllBooks();
  }, [])


  return (
    <div>
      <CollectionList />
      <div className="container">
        <div className="row">
          {books.map((book, index) => (
            <div key={index} className="col-md-2 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title text-center">{book.title}</h6>
                  <p>{book.author}</p>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Books