import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";
import { ShoppingLogin } from "./shopping-login";
import { ShoppingResults } from "./shopping-results";
import { lazy, Suspense } from "react";

const ShoppingHome = lazy(()=> import('./shopping-home'));

export function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white p-2">
                    <div className="bi bi-bag fs-3 fw-bold text-center"> Shopping</div>
                </header>
                <section className="mt-4">
                   <Suspense fallback={<div>Loading please wait..</div>}>

                     <Routes>
                        <Route path="/" element={<ShoppingLogin />} />
                        <Route path="home" element={<ShoppingHome />} />
                        <Route path="products/:catid" element={<ShoppingProducts />}>
                            <Route path="details/:prodid" element={<ShoppingDetails />} />
                        </Route>
                        <Route path="results" element={<ShoppingResults />} />
                    </Routes>

                   </Suspense>
                </section>
            </BrowserRouter>
        </div>
    )
}