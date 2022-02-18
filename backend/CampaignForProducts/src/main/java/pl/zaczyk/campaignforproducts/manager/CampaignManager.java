package pl.zaczyk.campaignforproducts.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.zaczyk.campaignforproducts.dao.CampaignRepo;
import pl.zaczyk.campaignforproducts.dao.entity.Campaign;

import java.util.Optional;

@Service
public class CampaignManager {

    private CampaignRepo campaignRepo;

    @Autowired
    public CampaignManager(CampaignRepo campaignRepo) {
        this.campaignRepo = campaignRepo;
    }

    public Iterable<Campaign> findAllCampaigns(){
        return campaignRepo.findAll();
    }

    public Optional<Campaign> findCampaignById(Long id){
        return campaignRepo.findById(id);
    }

    public Campaign saveCampaign(Campaign campaign){
        return campaignRepo.save(campaign);
    }

    public Campaign updateCampaign(Campaign newCampaign) {
        return campaignRepo.save(newCampaign);
    }

    public void deleteCampaignById(Long id){
        campaignRepo.deleteById(id);
    }

}