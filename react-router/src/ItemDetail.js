import React, {useState, useEffect} from 'react';
import './App.css';

function Item({ match }) {

    useEffect(()=>{
        fetchItem();
        console.log(match.params.asin);
        console.log(item);
    },[])

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`https://api.rainforestapi.com/request?api_key=1820857CC5D14D2C8185A729798AABAB&type=product&amazon_domain=amazon.com&asin=${match.params.asin}`);
        const item = await data.json();
        setItem(item);
    }

    return (
        <div>
            <h1>{item.product.title}</h1>
            <img src={item.product.images[0].link} alt=""/>
        </div>
    );
}

export default Item;