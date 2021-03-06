package com.sprachkurskonzept.app.ui.controller;

import com.sprachkurskonzept.app.entity.*;
import com.sprachkurskonzept.app.repository.EntryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path="/db")
public class EntryController {
    Logger logger = LoggerFactory.getLogger(EntryController.class);
    @Autowired
    private EntryRepository entryRepository;
    @Autowired
    private CategoryController categoryController;

    @RequestMapping(path="/addEntry")
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    public @ResponseBody String addNewEntry (@RequestParam String german, @RequestParam String otherLang,
                                             @RequestParam String categoryName, @RequestParam(required = false) String type,
                                             @RequestParam(required = false) String optional) {
        if(findByGerman(german)!= null){
            return null;
        }
        Entry entry = new Entry();
        entry.setGerman(german);
        entry.setOtherLang(otherLang);
        Category category = categoryController.findCategory(categoryName);
        if(category == null){
            categoryController.addNewCategory(categoryName);
            category = categoryController.findCategory(categoryName);
        }
        entry.setCategory(category);
        if(type != null) {
            switch (type.toLowerCase()) {
                case "nomen":
                    entry.setArticle(optional);
                    break;
                case "verb":
                    entry.setVerbtype(optional);
                    break;
                case "preposition":
                    entry.setWithCase(optional);
                    break;
            }
        }
        entryRepository.save(entry);
        logger.info(category.toString()+" saved");
        return "Saved";
    }

    @GetMapping(path="/allEntries")
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    public @ResponseBody Iterable<Entry> getAllEntries() {
        return entryRepository.findAll();
    }
    @GetMapping(path="/findGerman")
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    public @ResponseBody Entry findByGerman(@RequestParam String german) {
        return entryRepository.findByGerman(german);
    }

    @GetMapping(path="/findOtherLang")
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    public @ResponseBody Entry findByOtherLang(@RequestParam String otherLang) {
        return entryRepository.findByOtherLang(otherLang);
    }

    @GetMapping(path="/findCategory")
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    public @ResponseBody List<Entry> findByCategory(@RequestParam Category category) {
        return entryRepository.findByCategory(category);
    }


    @RequestMapping(path="/deleteEntry")
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    public String deleteEntry(@RequestParam String german){
        entryRepository.delete(findByGerman(german));
        return "Die Vokabel "+german+ " wurde gelöscht";
    }
}
