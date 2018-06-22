package com.sprachkurskonzept.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Entry {

    @Id @GeneratedValue
    private Long id;
    private String german;
    private String otherLang;
    @OneToOne
    private Category category;

    public Entry() {
    }

    public Entry(String german, String otherLang, Category category) {
        this.german = german;
        this.otherLang = otherLang;
        this.category = category;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
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
                ", category=" + category +
                '}';
    }
}
