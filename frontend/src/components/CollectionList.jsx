import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';



const CollectionList = () => {

    //console.log("collectionList Start")

    const backendUrl = import.meta.env.BACKEND_URL;
    const [collections, setCollections] = useState([]);
    //console.log("backend URL " + import.meta);


    const getAllCollections = async () => {
        try {

            const { data } = await axios.get("http://localhost:3000/api/collections");

            //console.log(data);
            setCollections(data);

        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        getAllCollections();
    }, [])


    //console.log(collections);

    return (
        <div className="d-flex flex-wrap justify-content-center p-3">
            <button className={"btn btn-primary btn-sm rounded-pill me-2 mb-2"}>
                All
            </button>
            {
                collections.map((item, index) => (
                    <button key={index} className={"btn btn-primary btn-sm rounded-pill me-2 mb-2"}>
                        {item.name}
                    </button>
                ))
            }
        </div >
    )
}

export default CollectionList