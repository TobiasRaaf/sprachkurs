import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../../entry.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  constructor(private entryService: EntryService) { }

  ngOnInit() {
  }

  submitCategory() {
    this.entryService.submitCategory();
  }
}
