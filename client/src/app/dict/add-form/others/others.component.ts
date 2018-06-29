import { Component, OnInit } from '@angular/core';
import { DictEntry } from '../../dictEntry'
import { DictCategory } from '../../dictCategory';
import { EntryService } from '../../../entry.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

	entries: DictEntry[];
  categories: DictCategory[];
  
  constructor(private entryService: EntryService) { }

  ngOnInit() {
		this.getCategories();
		this.getEntries();
  }
	
	getEntries(): void {
		this.entryService.getEntries()
		.subscribe(entries => this.entries = entries);
	};

	getCategories(): void {
		this.entryService.getCategories()
		.subscribe(categories => this.categories = categories);
	};

	submit(): void {
		this.entryService.submit("Oth", null, null);
	}
}
