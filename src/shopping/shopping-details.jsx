import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom"


export function ShoppingDetails(){

    let params = useParams();
    const [product, setProduct] = useState({id:null, Title:null, Price:0, Rating:0, CategoryId:0});

    let outletcontext = useOutletContext();

    function LoadProduct(){
        axios.get(`http://127.0.0.1:3000/products/${params.prodid}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    useEffect(()=>{
        LoadProduct();
    },[params])

    return(
        <div className="container-fluid">
            <div className="card m-2 p-2" style={{width:'250px'}}>
                <div className="card-header">
                    Product Details 
                    <br/>
                    {outletcontext[0].Title}
                </div>
                <div className="card-body">
                     <dl>
                        <dt>Name</dt>
                        <dd>{product.Title}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>Rating</dt>
                        <dd>{product.Rating} <span className="bi bi-star-fill text-success"></span> </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}