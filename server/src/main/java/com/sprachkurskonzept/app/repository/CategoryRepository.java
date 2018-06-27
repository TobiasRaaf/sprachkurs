package com.sprachkurskonzept.app.repository;

import com.sprachkurskonzept.app.entity.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {
    Category findByName(String name);
}
