import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '/app/dict/mock-dict';
import { CATEGORIES } from '/app/dict/mock-categories';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {

  entries = ENTRIES;
  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit() {
  }

}
