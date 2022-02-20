package pl.zaczyk.campaignforproducts.dao.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Campaign {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long campaignId;
    private String campaignName;
    private String keywords;
    private int minAmount;
    private BigDecimal campaignFund;
    private boolean status = false;
    private String townName;
    private double radius;

    public Campaign() {
    }

    public Campaign(Long campaignId, String campaignName, String keywords, int minAmount, BigDecimal campaignFund, boolean status, String townName, double radius, Product product) {
        this.campaignId = campaignId;
        this.campaignName = campaignName;
        this.keywords = keywords;
        this.minAmount = minAmount;
        this.campaignFund = campaignFund;
        this.status = status;
        this.townName = townName;
        this.radius = radius;
    }

    public Long getCampaignId() {
        return campaignId;
    }

    public void setCampaignId(Long campaignId) {
        this.campaignId = campaignId;
    }

    public String getCampaignName() {
        return campaignName;
    }

    public void setCampaignName(String campaignName) {
        this.campaignName = campaignName;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public int getMinAmount() {
        return minAmount;
    }

    public void setMinAmount(int minAmount) {
        this.minAmount = minAmount;
    }

    public BigDecimal getCampaignFund() {
        return campaignFund;
    }

    public void setCampaignFund(BigDecimal campaignFund) {
        this.campaignFund = campaignFund;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getTownName() {
        return townName;
    }

    public void setTownName(String townName) {
        this.townName = townName;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    @Override
    public String toString() {
        return "Campaign{" +
                "campaignId=" + campaignId +
                ", campaignName='" + campaignName + '\'' +
                ", keywords='" + keywords + '\'' +
                ", minAmount=" + minAmount +
                ", campaignFund=" + campaignFund +
                ", status=" + status +
                ", townName='" + townName + '\'' +
                ", radius=" + radius +
                '}';
    }
}

