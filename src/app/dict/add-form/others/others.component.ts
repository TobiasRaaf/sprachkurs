import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '../../mock-dict';
import { CATEGORIES } from '../../mock-categories';

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
