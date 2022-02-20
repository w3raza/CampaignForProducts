import React, { Component } from 'react'
import ProductService from '../services/ProductService';
import CampaignService from '../services/CampaignService';
import { Link } from 'react-router-dom'
import Select from 'react-select'

class ListProductComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            campaigns: []
        }
        this.deleteProduct = this.deleteProduct.bind(this);
        this.chooseOptions = this.chooseOptions.bind(this);
        this.addCampaignToProduct = this.addCampaignToProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
        CampaignService.getCampaigns().then((res) => {
                console.log(res.data)
                this.setState({ campaigns: res.data });   
        });
        
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.productId !== id)});
        });
    }

    addCampaignToProduct(campaign) {
        // ProductService.addCampaignToProduct(this.state.products.productId, campaign).then(res => {
        //     this.setState({products:  res.data });  
        // });
    }


    chooseOptions = () => {
        const select = document.createElement('select')
        this.state.campaigns.forEach(element => {
            select.innerHTML += `
                <option value=${element.campaignName}>
            `
        });
        // <Select options={this.options} />
    }

    render() {
        let campaignsList = this.state.campaigns.length > 0 && this.state.campaigns.map((item, i) => {
            return (
                <option key={i} value={item.campaignId}>{item.campaignName}</option>
            )
        }, this);
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
                                                <td>
                                                    <select onChange={this.addCampaignToProduct(this.value)}>
                                                        <option></option>
                                                        {campaignsList}
                                                    </select>
                                                    {/* <select id={product.productId}>
                                                        {this.state.campaigns.map(el => {
                                                            return <option key={product.productId} value={el.campaignName}></option>
                                                        })}
                                                    </select> */}
                                                </td>
                                             <td>
                                                    <Link to={"/product/updateProduct/" + product.productId} className = "btn btn-primary mb-2" > update </Link>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteProduct(product.productId)} className="btn btn-danger">Delete </button>
                                                    
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