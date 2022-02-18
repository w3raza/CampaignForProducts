package pl.zaczyk.campaignforproducts.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.zaczyk.campaignforproducts.dao.entity.Campaign;
import pl.zaczyk.campaignforproducts.manager.CampaignManager;

import java.util.Optional;

@RestController
@RequestMapping("/campaign")
@CrossOrigin

public class CampaignController {

    private CampaignManager campaignManager;

    @Autowired
    public CampaignController(CampaignManager campaignManager){
        this.campaignManager = campaignManager;
    }

    @GetMapping("/allCampaigns")
    public Iterable<Campaign> getAllCampaigns(){
        return campaignManager.findAllCampaigns();
    }

    @GetMapping("/getCampaign")
    public Optional<Campaign> getCampaignById(@RequestParam Long index){
        return campaignManager.findCampaignById(index);
    }

    @PostMapping("/addCampaign")
    public Campaign addCampaign(@RequestBody Campaign campaign){
        return campaignManager.saveCampaign(campaign);
    }

    @PutMapping("/updateCampaign")
    public Campaign updateCampaign(@RequestBody Campaign campaign){
        return campaignManager.updateCampaign(campaign);
    }

    @DeleteMapping("/deleteCampaign")
    public void deleteCampaign(@RequestParam Long index){
        campaignManager.deleteCampaignById(index);
    }

}
