import React from 'react'



const CollectionList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
      {genres.map((genre, index) => (
        <button
          key={index}
          className={`btn btn-sm rounded-pill me-2 mb-2`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}

export default CollectionList