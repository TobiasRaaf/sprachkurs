package com.sprachkurskonzept.app.ui.controller;

import com.sprachkurskonzept.app.entity.Entry;
import com.sprachkurskonzept.app.repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="/db")
public class EntryController {
    @Autowired
    private EntryRepository entryRepository;

    @GetMapping(path="/addEntry")
    public @ResponseBody String addNewCategory (@RequestParam String german, @RequestParam String otherLang) {
        Entry entry = new Entry();
        entry.setGerman(german);
        entry.setOtherLang(otherLang);
        entryRepository.save(entry);
        return "Saved";
    }

    @GetMapping(path="/allEntries")
    public @ResponseBody Iterable<Entry> getAllCategories() {
        return entryRepository.findAll();
    }
    @GetMapping(path="/findGerman")
    public @ResponseBody Entry findByGerman(@RequestParam String german) {
        return entryRepository.findByGerman(german);
    }
    @GetMapping(path="/findOtherLang")
    public @ResponseBody Entry findByOtherLang(@RequestParam String otherLang) {
        return entryRepository.findByOtherLang(otherLang);
    }
}
