package com.sprachkurskonzept.app.dao;

import com.sprachkurskonzept.app.entity.Category;

import java.util.List;

public interface CategoryDAO {
    public Category addCategory(Category category);
    public Category updateCategory(Category category);
    public void deleteCategory(long categoryId);
    public Category getCategory(long categoryId);
    public List<Category> getCategories();
}
