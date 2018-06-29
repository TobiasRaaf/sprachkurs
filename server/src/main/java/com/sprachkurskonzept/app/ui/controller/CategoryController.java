package com.sprachkurskonzept.app.ui.controller;

import com.sprachkurskonzept.app.repository.CategoryRepository;
import com.sprachkurskonzept.app.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/db")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @RequestMapping(path="/addCategory")
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    public @ResponseBody String addNewCategory (@RequestParam String name) {
        if(findCategory(name)== null) {
            Category category = new Category();
            category.setName(name);
            categoryRepository.save(category);
            return "Saved";
        }
        return null;
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
}
