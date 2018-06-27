package com.sprachkurskonzept.app.entity;

import javax.persistence.*;

@Entity
public class Entry {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long entryId;
    private String german;
    private String otherLang;

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
                '}';
    }
}
