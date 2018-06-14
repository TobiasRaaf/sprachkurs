import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '/app/dict/mock-dict';
import { CATEGORIES } from '/app/dict/mock-categories';

@Component({
  selector: 'app-preposition',
  templateUrl: './preposition.component.html',
  styleUrls: ['./preposition.component.css']
})
export class PrepositionComponent implements OnInit {

  entries = ENTRIES;
  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit() {
  }

}
