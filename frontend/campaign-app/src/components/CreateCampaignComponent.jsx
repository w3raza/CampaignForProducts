import React, {useState} from 'react'
import {Link, useNavigate  } from 'react-router-dom';
import campaignService from '../services/CampaignService';

const CreateCampaignComponent = () => {
    const [campaignName, setcampaignName] = useState('')
    const [keywords, setkeywords] = useState('')
    const [minAmount, setminAmount] = useState(0)
    const [campaignFund, setcampaignFund] = useState(0)
    // const [campaignStatus, setkeywords] = useState('')
    const [townName, settownName] = useState('')
    const [radius, setradius] = useState(0)
    let navigate = useNavigate();
    
    
    const savecampaign = (e) => {
        e.preventDefault()
        console.log(campaignName, keywords, minAmount, campaignFund, townName, radius)
        const campaign = {campaignName, keywords, minAmount, campaignFund, townName, radius}
            console.log(campaign)
            campaignService.addCampaigns(campaign).then((response) => {
                navigate('/campaign', { replace: true })
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
                           <h2 className = "text-center">Add campaign</h2>
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Campaign Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "campaign name"
                                        name = "campaignName"
                                        className = "form-control"
                                        value = {campaignName}
                                        onChange = {(e) => setcampaignName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Campaign keywords :</label>
                                    <input
                                        type = "text"
                                        placeholder = "campaign keywords"
                                        name = "keywords"
                                        className = "form-control"
                                        value = {keywords}
                                        onChange = {(e) => setkeywords(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Campaign min amount :</label>
                                    <input
                                        type = "number"
                                        placeholder = "campaign min amount"
                                        name = "minAmount"
                                        className = "form-control"
                                        value = {minAmount}
                                        onChange = {(e) => setminAmount(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Campaign Fund :</label>
                                    <input
                                        type = "number"
                                        placeholder = "campaign Fund"
                                        name = "campaignFund"
                                        className = "form-control"
                                        value = {campaignFund}
                                        onChange = {(e) => setcampaignFund(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Campaign town name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "campaign twon name"
                                        name = "townName"
                                        className = "form-control"
                                        value = {townName}
                                        onChange = {(e) => settownName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Campaign radius :</label>
                                    <input
                                        type = "number"
                                        placeholder = "campaign radius"
                                        name = "radius"
                                        className = "form-control"
                                        value = {radius}
                                        onChange = {(e) => setradius(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => savecampaign(e)} >Submit </button>
                                <Link to="/campaign" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
    
}

export default CreateCampaignComponent