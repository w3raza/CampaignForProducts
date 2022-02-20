import React, { Component } from 'react'
import CampaignService from '../services/CampaignService';
import { Link } from 'react-router-dom'

class ListCampaignComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                campaigns: []
        }
        this.deleteCampaign = this.deleteCampaign.bind(this);
    }

    componentDidMount(){
        CampaignService.getCampaigns().then((res) => {
            this.setState({ campaigns: res.data});
        });
    }

    deleteCampaign(id){
        CampaignService.deleteCampaign(id).then( res => {
            this.setState({campaigns: this.state.campaigns.filter(campaign => campaign.campaignId !== id)});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Campaigns List</h2>
                 <div className = "row">
                    <Link to = "/campaign/addCampaign" className = "btn btn-primary mb-2" > Add Campaign </Link>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Name</th>
                                <th> Keywords</th>
                                <th> Min amount </th>
                                <th> Fund </th>
                                <th> Status </th>
                                <th> TownName</th>
                                <th> Radius</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.campaigns.map(
                                        campaign => 
                                        <tr key = {campaign.campaignId}>
                                             <td> { campaign.campaignName} </td>   
                                             <td> {campaign.keywords}</td>
                                                <td> {campaign.minAmount}</td>
                                                <td> {campaign.campaignFund}</td>
                                                <td> {campaign.status === false ? "OFF" : "ON"}</td>
                                                <td> {campaign.townName}</td>
                                                <td> {campaign.radius}</td>
                                             <td>
                                                    <Link to={"/campaign/updateCampaign/" + campaign.campaignId} className = "btn btn-primary mb-2" > update </Link>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCampaign(campaign.campaignId)} className="btn btn-danger">Delete </button>
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

export default ListCampaignComponent