package com.sprachkurskonzept.app;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/entry")
public class RestAPI {

    Map<Long, Entry> entries = new HashMap<Long, Entry>();

    @PostConstruct
    public void initIt() throws Exception {
        entries.put(Long.valueOf(1), new Entry("Wort", "word", new Category("Allgemein")));
        entries.put(Long.valueOf(2), new Entry("Brot", "bread", new Category("Essen & Trinken")));
        entries.put(Long.valueOf(3), new Entry("Stift", "pen", new Category("Schule")));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value= "/all")
    public Map<Long, Entry> getResource() {
        return entries;
    }
}
