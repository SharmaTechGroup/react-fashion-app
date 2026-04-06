import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";


export function ShoppingProducts(){

    let params = useParams();
    const [products, setProducts] = useState([{id:null, Title:null, Price:0, Rating:0, CategoryId:0}]);
    
    function LoadProducts(){
        axios.get(`http://127.0.0.1:3000/products`)
        .then(response=>{
            setProducts(response.data.filter(product=>product.CategoryId===parseInt(params.catid)));
        })
    }

   

    useEffect(()=>{
       
        LoadProducts();

    },[])

    return(
        <div className="container-fluid">
            <h4> PRODUCTS</h4>
            <section className="row">
                <div className="col-4">
                     <ol>
                        {
                            products.map(product=><li key={product.id}><Link to={`details/${product.id}`}>{product.Title}</Link></li>)
                        }
                    </ol>
                </div>
                <div className="col-8">
                     <Outlet context={products} />
                </div>
            </section>
            <Link to='/home'>Back to Home</Link>
        </div>
    )
}