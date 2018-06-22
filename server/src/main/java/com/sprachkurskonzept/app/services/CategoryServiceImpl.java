package com.sprachkurskonzept.app.services;

import com.sprachkurskonzept.app.dao.CategoryDAO;
import com.sprachkurskonzept.app.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("categoryService")
@Transactional
public class CategoryServiceImpl implements CategoryService {

    @Autowired(required = true)
    @Qualifier("categoryDAO")
    private CategoryDAO categoryDAO;

    @Transactional
    public Category addCategory(String categoryName) {
        System.out.println("Category Service create invoked:"+categoryName);
        Category category = new Category();
        category.setName(categoryName);
        category = categoryDAO.addCategory(category);
        return category;
    }

    @Transactional
    public Category updateCategory(long categoryId, String categoryName) {
        System.out.println("Category Service Update invoked:"+categoryName);
        Category category = new Category();
        category.setName(categoryName);
        category = categoryDAO.updateCategory(category);
        return category;
    }

    public Category getCategory(long categoryId) {
        return categoryDAO.getCategory(categoryId);
    }

    public List<Category> getAllCategories() {
        return categoryDAO.getCategories();
    }
}
