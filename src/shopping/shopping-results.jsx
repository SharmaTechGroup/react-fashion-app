import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom"


export function ShoppingResults(){

    const [querystring] = useSearchParams();
    const [products, setProducts] = useState([{Title:null, Price:0, Rating:0, CategoryId:0}]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/products`)
        .then(response=>{
            
            setProducts(response.data.filter(product=> product.Title.toLowerCase().includes(querystring.get('search').toLowerCase())));
        })
        
    },[])

    return(
        <div>
            <h3>Search Results</h3>
            <ul>
                {
                    products.map(product=><li key={product.Title}>{product.Title}</li>)
                }
            </ul>
            <Link to="/home">Home</Link>
        </div>
    )
}