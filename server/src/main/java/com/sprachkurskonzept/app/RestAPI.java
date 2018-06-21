package com.sprachkurskonzept.app;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RestAPI {

    Map<Long, Entry> entries = new HashMap<Long, Entry>();
    Map<Long, Category> categories = new HashMap<Long, Category>();


    @PostConstruct
    public void initIt() throws Exception {
        categories.put(Long.valueOf(1), new Category("Allgemein"));
        categories.put(Long.valueOf(2), new Category("Essen & Trinken"));
        categories.put(Long.valueOf(3), new Category("Schule"));
        entries.put(Long.valueOf(1), new Entry("Wort", "word", categories.get(Long.valueOf(1))));
        entries.put(Long.valueOf(2), new Entry("Brot", "bread", categories.get(Long.valueOf(2))));
        entries.put(Long.valueOf(3), new Entry("Stift", "pen", categories.get(Long.valueOf(3))));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value= "entry/all")
    public Map<Long, Entry> getEntries() {
        return entries;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value= "category/all")
    public Map<Long, Category> getcategories() {
        return categories;
    }
}
