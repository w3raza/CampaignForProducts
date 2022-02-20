import axios from "axios";

const Campaign_URL = "http://localhost:8080/campaign";

class CampaignService {
  getCampaigns() {
    return axios.get(Campaign_URL + "/allCampaigns");
  }

  addCampaigns(Campaign) {
    return axios.post(Campaign_URL + "/addCampaign", Campaign);
  }

  updateCampaign(Campaign, CampaignId) {
    return axios.put(
      Campaign_URL + "/updateCampaign?index=" + CampaignId,
      Campaign
    );
  }

  deleteCampaign(CampaignId) {
    return axios.delete(Campaign_URL + "/deleteCampaign?index=" + CampaignId);
  }
}

export default new CampaignService();
