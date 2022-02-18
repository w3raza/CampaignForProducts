import React, { Component } from 'react'
import ProductService from '../services/ProductService';
import { Link } from 'react-router-dom'

class ListProductComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Products List</h2>
                 <div className = "row">
                    <Link to = "/product/addProduct" className = "btn btn-primary mb-2" > Add Product </Link>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Price </th>
                                    <th> Campaigns</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.productId}>
                                             <td> { product.productName} </td>   
                                             <td> {product.productPrice}</td>
                                             <td> {product.campaigns}</td>
                                             <td>
                                                 <button onClick={ () => this.upgradeProduct(product.productId)} className="btn btn-info">Update </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProductComponent