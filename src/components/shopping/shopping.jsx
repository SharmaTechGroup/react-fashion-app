import axios from "axios";
import { useEffect, useState } from "react"

export function Shopping(){

    const [products, setProducts]= useState([{id:0, title:null, image:null, description:null, category:null, price:0, rating:{rate:0, count:0}}]);


    function LoadProducts(){
        axios.get(`https://fakestoreapi.com/products`)
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{

        LoadProducts();

    },[])

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-3 bg-light">
                <div  className="fw-bold fs-3">
                    <span className="bi bi-bag"> Shopping </span> 
                </div>
                <div>
                    <div className="input-group">
                        <input type="text" placeholder="Search Shopping.com" className="form-control" />
                        <button className="bi bi-search btn btn-warning"></button>
                    </div>
                </div>
                <div>
                    <button className="bi bi-cart4 btn btn-warning"> </button>
                </div>
            </header>
            <section className="mt-4 row">
              <div className="col-2 bg-light p-4">
                 <div className="my-2">
                    <label className="form-label">Select Category</label>
                    <div>
                        <select className="form-select"></select>
                    </div>
                 </div>
                 <div className="my-2">
                    <label className="form-label">Filter</label>
                    <ul className="list-unstyled list-group">
                        <li className="list-group-item"><input type="checkbox"/> Brand-1 </li>
                        <li className="list-group-item"><input type="checkbox"/> Brand-2 </li>
                        <li className="list-group-item"><input type="checkbox"/> Brand-3 </li>
                    </ul>
                 </div>
                 <div className="my-3">
                    <label className="form-label">Ratings</label>
                    <ul className="list-unstyled list-group">
                        <li className="list-group-item"><input type="checkbox"/> 4 <span className="bi bi-star-fill text-success"></span> </li>
                        <li className="list-group-item"><input type="checkbox"/> 3 <span className="bi bi-star-fill text-success"></span> </li>
                    </ul>
                 </div>
              </div>

              <div className="col-10">
                 <main className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                    {
                        products.map(product=>
                            <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                                <img src={product.image} className="card-img-top" height={120} />
                                <div className="card-header" style={{height:'100px'}}>
                                   {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning w-100 bi bi-cart4">Add to Cart</button>
                                </div>
                            </div>
                        )
                    }
                 </main>
              </div>
            </section>
            <footer>

            </footer>
        </div>
    )
}