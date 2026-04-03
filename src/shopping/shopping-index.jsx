import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingHome } from "./shopping-home";
import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";
import { ShoppingLogin } from "./shopping-login";

export function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white p-2">
                    <div className="bi bi-bag fs-3 fw-bold text-center"> Shopping</div>
                </header>
                <section className="mt-4">
                    <Routes>
                        <Route path="/" element={<ShoppingLogin />} />
                        <Route path="home" element={<ShoppingHome />} />
                        <Route path="products/:catid" element={<ShoppingProducts />}>
                            <Route path="details/:prodid" element={<ShoppingDetails />} />
                        </Route>
                        
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}