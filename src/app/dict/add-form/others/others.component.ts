import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '/app/dict/mock-dict';
import { CATEGORIES } from '/app/dict/mock-categories';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  entries = ENTRIES;
  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit() {
  }

}
