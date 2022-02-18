package pl.zaczyk.campaignforproducts.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.zaczyk.campaignforproducts.dao.entity.Product;

@Repository
public interface ProductRepo extends CrudRepository<Product, Long> {
}
