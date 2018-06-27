package com.sprachkurskonzept.app.repository;

import com.sprachkurskonzept.app.entity.Entry;
import org.springframework.data.repository.CrudRepository;

public interface EntryRepository extends CrudRepository<Entry, Long> {

    Entry findByGerman(String german);
    Entry findByOtherLang(String otherLang);
}
