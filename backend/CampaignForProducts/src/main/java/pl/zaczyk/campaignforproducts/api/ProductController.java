package pl.zaczyk.campaignforproducts.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.zaczyk.campaignforproducts.dao.entity.Campaign;
import pl.zaczyk.campaignforproducts.dao.entity.Product;
import pl.zaczyk.campaignforproducts.manager.ProductManager;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
@CrossOrigin

public class ProductController {

    private ProductManager productManager;

    @Autowired
    public ProductController(ProductManager productManager){
        this.productManager = productManager;
    }

    @GetMapping("/allProducts")
    public Iterable<Product> getAllProducts(){
        return productManager.findAllProducts();
    }

    @GetMapping("/getProduct")
    public Optional<Product> getProductById(@RequestParam Long index){
//        Optional<Product> first = productList.stream().filter(element->element.getProductId()==index).findFirst();
        return productManager.findProductById(index);
    }

    @PostMapping("/addProducts")
    public Product addProduct(@RequestBody Product product){
        return productManager.addProduct(product);
    }

    @PutMapping("/updateProducts")
    public Product updateProduct(@RequestBody Product product){
        return productManager.updateProduct(product);
    }

    @DeleteMapping("/deleteProducts")
    public void deleteProduct(@RequestParam Long index){
        productManager.deleteProductById(index);
    }

    @PostMapping("/addCampaignToProduct")
    public Product addCampaignToProduct(@RequestParam Long index, @RequestBody Campaign campaign) {
        return productManager.addCampaignToProduct(index, campaign);
    }

    @GetMapping("/getCampaignsFromProduct")
    public List<Campaign> getCampaignsFromProduct(@RequestParam Long index) {
        return productManager.getCampaignsFromProduct(index);
    }
}

