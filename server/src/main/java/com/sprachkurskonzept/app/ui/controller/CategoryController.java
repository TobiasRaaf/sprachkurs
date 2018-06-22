package com.sprachkurskonzept.app.ui.controller;

import com.sprachkurskonzept.app.entity.Category;
import com.sprachkurskonzept.app.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/category")
public class CategoryController {

    @Autowired(required = true)
    @Qualifier("categoryService")
    private CategoryService categoryService;

    @GetMapping("/")
    public String getHome(){
        return "redirect:categories.action";
    }
    @GetMapping("/categories")
    public ModelAndView getCategories(){
        ModelAndView model = new ModelAndView("categories");
        List<Category> list = categoryService.getAllCategories();
        model.addObject("categories", list);
        return model;
    }
}
