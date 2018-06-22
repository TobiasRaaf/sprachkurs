package com.sprachkurskonzept.app.dao;

import com.sprachkurskonzept.app.entity.Category;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository("categoryDAO")
@Transactional
public class CategoryDAOImpl implements CategoryDAO {

    @PersistenceContext
    public EntityManager entityManager;

    @Transactional(readOnly=false)
    public Category addCategory(Category category) {
        entityManager.persist(category);
        return category;
    }

    @Transactional(readOnly=false)
    public Category updateCategory(Category category) {
        entityManager.merge(category);
        return category;
    }

    @Transactional(readOnly=false)
    public void deleteCategory(long categoryId) {
        //ToDo: Delete-code
    }

    @Transactional(readOnly=false)
    public Category getCategory(long categoryId) {
        String sql = "select category from Category category where category.categoryId="+categoryId;
        try{
            return (Category)entityManager.createQuery(sql).getSingleResult();
        }catch(Exception e){

        }
        return null;
    }

    @Transactional(readOnly=false)
    public List<Category> getCategories() {
        return entityManager.createQuery("select category from Category category").getResultList();
    }
}
