import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DictEntry } from './dict/dictEntry';
import { DictCategory } from './dict/dictCategory';
import { ENTRIES } from './dict/mock-dict';
import { CATEGORIES } from './dict/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  getEntries(): Observable<DictEntry[]> {
    return of(ENTRIES);
  };

  getCategories(): Observable<DictCategory[]> {
    return of(CATEGORIES);
  };
}
