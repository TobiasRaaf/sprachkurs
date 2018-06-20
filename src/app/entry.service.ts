import { Injectable } from '@angular/core';
import { DictEntry } from './dict/dictEntry';
import { DictCategory } from './dict/dictCategory';
import { ENTRIES } from './dict/mock-dict';
import { CATEGORIES } from './dict/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  getEntries(): DictEntry[] {
    return ENTRIES;
  };

  getCategories(): DictCategory[] {
    return CATEGORIES;
  };
}
