import axios from "axios"
import { useEffect, useState } from "react"
import './mouse-demo.css';

export function MouseDemo(){
    
    const [products, setProducts] = useState([{id:0, image:null}]);
    const [categories, setCategories] = useState([]);

    const [previewImage, setPreviewImage] = useState('');

    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })
    }

    function LoadProducts(categoryName){
         if(categoryName==='all'){
             axios.get('https://fakestoreapi.com/products')
             .then(response=>{
                setProducts(response.data);
             })
         } else {
            axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(response=>{
                setProducts(response.data);
            })
         }
    }

    useEffect(()=>{

        LoadCategories();
        LoadProducts('all');

    },[])

    function handleMouseOver(e){
        setPreviewImage(e.target.src);
    }

    function handleCategoryChange(e){
        LoadProducts(e.target.value);
    }

    return(
        <div className="container-fluid">
            <div className="row mt-4">
               
                <div className="col-2">
                    <div>
                    <label className="form-label">Select Category</label>
                    <select onChange={handleCategoryChange} className="form-select">
                        {
                            categories.map(category=><option key={category} value={category}>{category.toUpperCase()}</option>)
                        }
                    </select>
                    </div>
                    <div className="overflow-auto" style={{height:'500px'}}>
                        {
                        products.map(product=>
                            <div key={product.id} className="my-5">
                                <img className="hover-style" onMouseOver={handleMouseOver} src={product.image} width={50} height={50} />
                            </div>
                        )
                      }
                    </div>
                </div>
                <div className="col-10">
                     <img width={300} src={previewImage} height={400} />
                </div>
            </div>
        </div>
    )
}