import { Component, OnInit } from '@angular/core';
import { DictEntry } from './dictEntry';
import { DictCategory } from './dictCategory';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html',
  styleUrls: ['./dict.component.css']
})
export class DictComponent implements OnInit {
	
	entries: DictEntry[];
	categories: DictCategory[];
	
	collButtons = document.getElementsByClassName("categories");
	index = 0;

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
		.subscribe(categories => 
			this.categories = categories
		);
	};

	hideShow(i: number) {
		var element = document.getElementsByClassName("categories")[i];
		element.classList.toggle("active");
		var content = element.nextElementSibling as HTMLElement;
		if(content.style.display === "block"){
			content.style.display = "none";
		}
		else {
			content.style.display = "block";
		}
	};

	addOverlay() {
		var overlay = document.getElementById("add-overlay-container") as HTMLElement;
		if (overlay.style.display === "none"){
			overlay.style.display = "block";
		}
		else {
			overlay.style.display = "none";
		}
	}
}
