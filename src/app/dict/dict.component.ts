import { Component, OnInit } from '@angular/core';
import { DictEntry } from './dictEntry';
import { DictCategory } from './dictCategory';
import { ENTRIES } from './mock-dict';
import { CATEGORIES } from './mock-categories';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html',
  styleUrls: ['./dict.component.css']
})
export class DictComponent implements OnInit {
	
	entries = ENTRIES;
	categories = CATEGORIES;
	
	collButtons = document.getElementsByClassName("categories");
	index = 0;

  	constructor() { }

	ngOnInit() {
			
	}
		
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
