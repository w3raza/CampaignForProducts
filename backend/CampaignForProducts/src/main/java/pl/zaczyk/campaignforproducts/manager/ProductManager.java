package pl.zaczyk.campaignforproducts.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import pl.zaczyk.campaignforproducts.dao.ProductRepo;
import pl.zaczyk.campaignforproducts.dao.entity.Campaign;
import pl.zaczyk.campaignforproducts.dao.entity.Product;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class ProductManager {

    private ProductRepo productRepo;

    @Autowired
    public ProductManager(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    public Optional<Product> findProductById(Long id){
        return productRepo.findById(id);
    }

    public Iterable<Product> findAllProducts(){
        return productRepo.findAll();
    }

    public Product addProduct(Product product){
        return productRepo.save(product);
    }

    public Product updateProduct(Product newProduct, Long id) {
        newProduct.setProductId(id);
        return productRepo.save(newProduct);
    }

    public void deleteProductById(Long id){
        productRepo.deleteById(id);
    }

    public Product addCampaignToProduct(Long productId, Campaign campaign) {
        Optional<Product> optional = this.findProductById(productId);
        optional.get().setCampaign(campaign);
        campaign.setStatus(true);
        return productRepo.save(optional.get());
    }

//    public Campaign getCampaignsFromProduct(Long productId) {
//
//        Optional<Product> optional = this.findProductById(productId);
//        return optional.get();
//    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDB(){
        addProduct(new Product(1L, "product1", new BigDecimal("1000")));
        addProduct(new Product(2L, "product2", new BigDecimal("2000")));
    }
}