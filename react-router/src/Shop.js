import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(()=>{
        fetchItems();
    },[])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.rainforestapi.com/request?api_key=1820857CC5D14D2C8185A729798AABAB&type=category&url=https%3A%2F%2Fwww.amazon.com%2Fs%3Fbbn%3D16225009011%26rh%3Dn%253A%252116225009011%252Cn%253A502394%252Cn%253A281052&page=1&sort_by=most_recent');
        const items = await data.json();
        setItems(items.category_results);
    }

    return (
        <div>
            {items.map(item => (
                <h1 key={item.asin}>
                    <Link to={`/shop/${item.asin}`}>
                    {item.title}
                    </Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;