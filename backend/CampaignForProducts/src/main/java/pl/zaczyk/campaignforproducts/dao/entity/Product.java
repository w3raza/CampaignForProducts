package pl.zaczyk.campaignforproducts.dao.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Product {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long productId;
    private String productName;
    private BigDecimal productPrice;

    @OneToOne
    @JoinColumn(name = "campaigns_campaign_id")
    Campaign campaign;

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", productPrice=" + productPrice +
                ", campaigns=" + campaign +
                '}';
    }

    public Product() {
    }

    public Product(Long productId, String productName, BigDecimal productPrice) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(BigDecimal productPrice) {
        this.productPrice = productPrice;
    }

    public Campaign getCampaign() {
        return campaign;
    }

    public void setCampaign(Campaign campaigns) {
        this.campaign = campaigns;
    }
}
