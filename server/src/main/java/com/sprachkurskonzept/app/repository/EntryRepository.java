package com.sprachkurskonzept.app.repository;

import com.sprachkurskonzept.app.entity.Category;
import com.sprachkurskonzept.app.entity.Entry;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EntryRepository extends CrudRepository<Entry, Long> {

    Entry findByGerman(String german);
    Entry findByOtherLang(String otherLang);
    List<Entry> findByCategory(Category category);
}
