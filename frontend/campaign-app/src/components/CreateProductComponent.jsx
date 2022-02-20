import React, {useState, useEffect} from 'react'
import {Link, useNavigate  } from 'react-router-dom';
import ProductService from '../services/ProductService';

const CreateProductComponent = () => {
    const [productName, setproductName] = useState('')
    const [productPrice, setproductPrice] = useState(0)
    const [campaigns] = useState([])
    let navigate = useNavigate();
    
   useEffect(() => {

        // ProductService.getProductById(id).then((response) =>{
        //     setproductName(response.data.productName)
        //     setproductPrice(response.data.productPrice)
        //     setcampaigns(response.data.campaigns)
        // }).catch(error => {
        //     console.log(error)
        // })
   })
    
    const saveProduct = (e) => {
        e.preventDefault();

        const product = {productName, productPrice, campaigns}

            ProductService.addProducts(product).then((response) => {
                navigate('/product', { replace: true })
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           <h2 className = "text-center">Add product</h2>
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Product Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Product name"
                                        name = "productName"
                                        className = "form-control"
                                        value = {productName}
                                        onChange = {(e) => setproductName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Product Price :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Product Price"
                                        name = "productPrice"
                                        className = "form-control"
                                        value = {productPrice}
                                        onChange = {(e) => setproductPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveProduct(e)} >Submit </button>
                                <Link to="/product" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
    
}

export default CreateProductComponent