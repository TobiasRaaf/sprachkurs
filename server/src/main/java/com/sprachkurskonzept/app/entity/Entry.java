package com.sprachkurskonzept.app.entity;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity
public class Entry {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long entryId;
    private String german;
    private String otherLang;
    @OneToOne
    private Category category;
    private String withCase;
    private String verbtype;
    private String article;

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Entry() {
    }

    public Entry(String german, String otherLang, Category category) {
        this.german = german;
        this.otherLang = otherLang;
    }

    public String getOtherLang() {

        return otherLang;
    }

    public void setOtherLang(String otherLang) {
        this.otherLang = otherLang;
    }

    public String getGerman() {

        return german;
    }

    public void setGerman(String german) {
        this.german = german;
    }

    @Override
    public String toString() {
        return "Entry{" +
                "german='" + german + '\'' +
                ", otherLang='" + otherLang + '\'' +
                ", category='" + category + '\''+
                '}';
    }

    public String getWithCase() {
        return withCase;
    }

    public void setWithCase(String withCase) {
        this.withCase = withCase;
    }

    public String getVerbtype() {
        return verbtype;
    }

    public void setVerbtype(String verbtype) {
        this.verbtype = verbtype;
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
    }
}
