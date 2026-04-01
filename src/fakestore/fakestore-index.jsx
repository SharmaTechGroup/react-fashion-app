import { createContext, useState } from "react";
import { FakestoreProducts } from "./fakestore-products";

export let CategoryContext = createContext(null);

export function FakestoreIndex(){
    const [category, setCategory] = useState('');
    const [sendCategory, setSendCategory] = useState('');

    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    function handleCategoryChange(e){
        setCategory(e.target.value);
    }
    function handleSearchClick(){
        setSendCategory(category);
    }
    function handleChildClick(product){
        alert('Item Added to Cart');
        cartItems.push(product);
        setCartCount(cartItems.length);
    }
    return(
        <div className="container-fluid">
            <header className="border border-1 p-3 d-flex justify-content-between align-items-center">
                <span className="fs-4 fw-bold">Fakestore</span>
                <div>
                   <div className="input-group">
                     <input className="form-control" onChange={handleCategoryChange} type="text" placeholder="search by category" />
                     <button onClick={handleSearchClick} className="btn btn-warning bi-search"></button>
                   </div>
                </div>
                <div>
                    <button data-bs-target="#cart" data-bs-toggle="offcanvas" className="btn position-relative btn-warning bi bi-cart3">
                        <span className="badge position-absolute bg-danger rounded rounded-circle">{cartCount}</span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                            
                            <h2>Your Cart Items</h2>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map(item=><tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td><img width="50" height="50" src={item.image} /></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-4">
                <CategoryContext value={sendCategory}>
                     <FakestoreProducts onAddClick={handleChildClick} />
                </CategoryContext>
            </section>
        </div>
    )
}