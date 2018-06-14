import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '/app/dict/mock-dict';
import { CATEGORIES } from '/app/dict/mock-categories';

@Component({
  selector: 'app-conjunction',
  templateUrl: './conjunction.component.html',
  styleUrls: ['./conjunction.component.css']
})
export class ConjunctionComponent implements OnInit {

  entries = ENTRIES;
  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit() {
  }

}
