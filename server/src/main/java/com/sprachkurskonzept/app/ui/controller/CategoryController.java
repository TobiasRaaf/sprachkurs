package com.sprachkurskonzept.app.ui.controller;

import com.sprachkurskonzept.app.entity.Entry;
import com.sprachkurskonzept.app.repository.CategoryRepository;
import com.sprachkurskonzept.app.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;

@Controller
@RequestMapping("/db")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private EntryController entryController;

    @RequestMapping(path="/addCategory")
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    public @ResponseBody String addNewCategory (@RequestParam String name) {
        if(findCategory(name)== null) {
            Category category = new Category();
            category.setName(name);
            categoryRepository.save(category);
            return "Saved";
        }
        return "";
    }

    @RequestMapping(path="/allCategories")
    @CrossOrigin(origins = "http://localhost:4200")
    public @ResponseBody Iterable<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @RequestMapping(path="/findCategory")
    @CrossOrigin(origins = "http://localhost:4200")
    public @ResponseBody Category findCategory(@RequestParam String name) {
        return categoryRepository.findByName(name);
    }

    @RequestMapping(path="/deleteCategory")
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    public String deleteCategory(@RequestParam String name){
        Category category = findCategory(name);
        Iterator<Entry> entries = entryController.findByCategory(category).iterator();
        while(entries.hasNext()){
            entryController.deleteEntry(entries.next().getGerman());
        }
        categoryRepository.delete(category);
        return "Die Kategory "+name+ " samt Einträgen wurde gelöscht";
    }
}
