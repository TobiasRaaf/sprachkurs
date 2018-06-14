import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '/app/dict/mock-dict';
import { CATEGORIES } from '/app/dict/mock-categories';

@Component({
  selector: 'app-nomen',
  templateUrl: './nomen.component.html',
  styleUrls: ['./nomen.component.css']
})
export class NomenComponent implements OnInit {

  entries = ENTRIES;
  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit() {
  }

}
