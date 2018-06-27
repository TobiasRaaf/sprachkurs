import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { DictEntry } from './dict/dictEntry';
import { DictCategory } from './dict/dictCategory';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private entriesUrl = "http://localhost:8080/db/allEntries";
  private categoriesUrl = "http://localhost:8080/db/allCategories";

  constructor( private http: HttpClient ) { }

  getEntries(): Observable<DictEntry[]> {
    return this.http.get<DictEntry[]>(this.entriesUrl);
  };

  getCategories(): Observable<DictCategory[]> {
    return this.http.get<DictCategory[]>(this.categoriesUrl);
  };
}
