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
  private entrySaveUrl = "http://localhost:8080/db/addEntry";
  private categorySaveUrl= "http://localhost:8080/db/addCategory";

  constructor( private http: HttpClient ) { }

  getEntries(): Observable<DictEntry[]> {
    return this.http.get<DictEntry[]>(this.entriesUrl);
  };

  getCategories(): Observable<DictCategory[]> {
    return this.http.get<DictCategory[]>(this.categoriesUrl);
  };
  submit(idSuffix, type, optional) {
    var german = (<HTMLInputElement>document.getElementById("german"+idSuffix)).value;
    var otherLang = (<HTMLInputElement>document.getElementById("otherLang"+idSuffix)).value;
    var category = (<HTMLSelectElement>document.getElementById("category"+idSuffix)).value;
    var xhr = new XMLHttpRequest();
    if(type == null){
      xhr.open('POST', this.entrySaveUrl+'?german='+german+'&otherLang='+otherLang+'&categoryName='+category);
    }
    else{
      xhr.open('POST', this.entrySaveUrl+'?german='+german+'&otherLang='+otherLang+'&categoryName='+category+'&type='+type+'&optional='+optional)
    }
    xhr.withCredentials = true;
    xhr.onload = function(){
      if (xhr.status === 200){
        alert("success");
      }
      else {
        alert("error");
      }
    };
    xhr.send();
  }
  submitCategory() {
    var categoryName = (<HTMLInputElement>document.getElementById("categoryName")).value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.categorySaveUrl+'?name='+categoryName);
    xhr.withCredentials = true;
    xhr.onload = function(){
      if (xhr.status === 200){
      }
      else {
      }
    };
    xhr.send();
  }
}
