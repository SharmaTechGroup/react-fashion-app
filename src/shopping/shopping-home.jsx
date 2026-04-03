import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



export function ShoppingHome(){

    const [categories, setCategories] = useState([{CategoryId:0, Name:null}]);

    function LoadCategories(){
       axios.get(`http://127.0.0.1:3000/categories`)
       .then(response=>{
        setCategories(response.data);
       })
    }

    useEffect(()=>{
        LoadCategories();
    },[])

    return(
        <div className="container-fluid">
            <ul className="list-group w-25 mt-3">
              {
                categories.map(category=>
                    <li key={category.CategoryId} className="list-group-item list-group-item-primary my-2"> <Link to={`products/${category.CategoryId}`}>{category.Name}</Link> </li>
                )
              }
            </ul>
        </div>
    )
}