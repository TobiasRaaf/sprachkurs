import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '../../mock-dict';
import { CATEGORIES } from '../../mock-categories';

@Component({
  selector: 'app-adjective',
  templateUrl: './adjective.component.html',
  styleUrls: ['./adjective.component.css']
})
export class AdjectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  entries = ENTRIES;
  categories = CATEGORIES;
}
