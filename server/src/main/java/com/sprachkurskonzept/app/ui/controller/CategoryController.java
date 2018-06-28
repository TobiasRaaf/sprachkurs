package com.sprachkurskonzept.app.ui.controller;

import com.sprachkurskonzept.app.repository.CategoryRepository;
import com.sprachkurskonzept.app.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping("/db")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping(path="/addCategory")
    public @ResponseBody String addNewCategory (@RequestParam String name) {
        Category category = new Category();
        category.setName(name);
        categoryRepository.save(category);
        return "Saved";
    }

    @GetMapping(path="/allCategories")
    public @ResponseBody Iterable<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @GetMapping(path="/findCategory")
    public @ResponseBody Category findCategory(@RequestParam String name) {
        return categoryRepository.findByName(name);
    }
}
