import { Component, OnInit } from '@angular/core';
import { DictEntry } from '../../dictEntry'
import { DictCategory } from '../../dictCategory';
import { EntryService } from '../../../entry.service';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {
  
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
}
