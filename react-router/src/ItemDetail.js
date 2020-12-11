import React, {useState, useEffect} from 'react';
import './App.css';

function Item({ match }) {

    useEffect(()=>{
        fetchItem();
    },[])

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`https://api.rainforestapi.com/request?api_key=1820857CC5D14D2C8185A729798AABAB&type=product&amazon_domain=amazon.com&asin=${match.params.asin}`);
        console.log(data);
        const item = await data.json();
        console.log(item);
        setItem(item.product);
        console.log(item.main_image.link);

    }

    return (
        <div>
            {/* <h1>{item.title}</h1>
            <img src={item.main_image.link} alt=""/> */}
        </div>
    );
}

export default Item;