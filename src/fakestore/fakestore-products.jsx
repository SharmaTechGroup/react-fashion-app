import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "./fakestore-index"



export function FakestoreProducts({onAddClick}){

    const [products, setProducts] = useState([{id:0, title:null, description:null, image:null, category:null, price:0, rating:{rate:0, count:0}}])

    let context = useContext(CategoryContext)

    function LoadProducts(){
        if(context===''){
            axios.get(`https://fakestoreapi.com/products`)
            .then(response=>{
                setProducts(response.data);
            })
        } else {
            axios.get(`https://fakestoreapi.com/products/category/${context}`)
            .then(response=>{
                setProducts(response.data);
            })
        }
    }

    useEffect(()=>{
        LoadProducts();
    },[context]);

    function handleAddClick(product){
        onAddClick(product);
    }

    return(
        <div className="d-flex flex-row flex-wrap overflow-auto" style={{height:'500px'}}>
            {
                products.map(product=>
                    <div className="card m-2 p-2" key={product.id} style={{width:'200px'}}>
                        <img className="card-img-top" src={product.image} height="120" />
                        <div className="card-header overflow-auto" style={{height:'100px'}}>
                            {product.title}
                        </div>
                        <div className="card-body">
                            <div>{product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}</div>
                        </div>
                        <div className="card-footer">
                            <button onClick={()=>handleAddClick(product)} className="btn btn-warning w-100">Add to Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}