import { useEffect, useState } from "react"
import axios from "axios";

export function DataBinding(){

    
    const [product, setProduct] = useState({title:null, image:null, rating:{rate:0, ratings:0, reviews:0}, features:[], price:0})

    function LoadProduct(){
         axios.get('product.json')
         .then(response=>{
             setProduct(response.data);
         })
    }


    useEffect(()=>{

         LoadProduct();   

    },[])
    
    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img width="100%" src={product.image} />
                </div>  
                <div className="col-9">
                    <div className="fs-4 fw-bold">{product.title}</div>
                    <div>
                        <span className="badge bg-success text-white">{product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="mx-3 fw-bold text-secondary">{product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews.toLocaleString('en-in')} reviews </span>
                    </div>
                    <div className="h2 mt-3">
                        {product.price.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}
                    </div>
                    <div className="mt-3">
                        <ul className="text-secondary list-unstyled">
                            {
                                product.features.map(feature=><li className="my-2 bi bi-dot" key={feature}>{feature}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}