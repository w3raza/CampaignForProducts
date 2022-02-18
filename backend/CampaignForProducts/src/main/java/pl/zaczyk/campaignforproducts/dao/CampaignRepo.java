package pl.zaczyk.campaignforproducts.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.zaczyk.campaignforproducts.dao.entity.Campaign;

import java.util.Optional;

@Repository
public interface CampaignRepo extends CrudRepository<Campaign, Long> {
}
