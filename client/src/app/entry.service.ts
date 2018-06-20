import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';

import { DictEntry } from './dict/dictEntry';
import { DictCategory } from './dict/dictCategory';
import { ENTRIES } from './dict/mock-dict';
import { CATEGORIES } from './dict/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  url = "http://localhost:8080/api/entry/all"

  constructor( private http: HttpClient ) { }

  getEntries(): Observable<DictEntry[]> {
    return this.http.get<DictEntry[]>(this.url);
  };

  getCategories(): Observable<DictCategory[]> {
    return this.http.get<DictCategory[]>(this.url);
  };
}
