package com.sprachkurskonzept.app.services;

import com.sprachkurskonzept.app.entity.Category;

import java.util.List;

public interface CategoryService {
    public Category addCategory(String categoryName);
    public Category updateCategory(long categoryId, String categoryName);
    public Category getCategory(long categoryId);
    public List<Category> getAllCategories();
}
