import React, { useState, useEffect } from "react";   
import './Flipkart.css'

function Flipkart() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let res = await fetch("http://localhost:1000/products"); 
            let data = await res.json();
            setItems(data);  
        } 
        fetchData();
    }, []); 

    return (
        <>
            <div className="shopping">
                {items.map((item) => (
                    <div className="items" >
                        <h1 style={{textAlign:"center"}}>{item.id}</h1>
                        <div className="thumbnail">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className="details">
                            <p>{item.title.toUpperCase()}</p>
                            <p>M.R.P: {item.price}</p>
                            <p>Rating: {item.rating}</p>
                            <p>Description: {item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Flipkart;
