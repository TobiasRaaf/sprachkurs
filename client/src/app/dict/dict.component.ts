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
		var content = element.nextElementSibling.nextElementSibling as HTMLElement;
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
	};

	showRelevantForm(event, sectionName) {
		var i, masks, sectionButtons;

		masks = document.getElementsByClassName("section-content");
		for (i = 0; i < masks.length; i++) {
			masks[i].style.display = "none";
		}

		sectionButtons = document.getElementsByClassName("section-button");
		for (i = 0; i < sectionButtons.length; i++) {
			sectionButtons[i].className = sectionButtons[i].className.replace(" active", "");
		}

		document.getElementById(sectionName+"-form").style.display = "block";
		document.getElementById(sectionName+"-button").classList.add("active");
	};

	deleteEntry(german){
		this.entryService.deleteEntry(german);
		this.ngOnInit();
	};

	deleteCategory(name){
		this.entryService.deleteCategory(name);
		this.ngOnInit();
	};

	searchEntries(){
		var filter = (<HTMLInputElement>document.getElementById("searchInput")).value;
		var entries = (<HTMLCollectionOf<HTMLParagraphElement>>document.getElementsByClassName("entry"));
		var i;
		for(i=0; i<entries.length; i++){
			if(entries.item(i).innerText.toLowerCase().indexOf(filter.toLowerCase()) > -1){
				entries.item(i).style.display="";
			}
			else{
				entries.item(i).style.display="none";
			}
		}
		this.checkIfShowCategory();
		if(filter == ""){
			this.showAllCategories();
		}
	};

	checkIfShowCategory(){
		var categories = (<HTMLCollectionOf<HTMLLIElement>>document.getElementsByTagName("li"));
		var i;
		for(i=0; i<categories.length; i++){
			var currentCategoryEntries = categories.item(i).lastElementChild.childNodes;
			var j;
			var allHidden=true;
			for(j=1; j<currentCategoryEntries.length; j++){
				if(currentCategoryEntries.item(j) instanceof Element){
					if((<HTMLElement>currentCategoryEntries.item(j)).style.display!="none"){
						allHidden=false;
					}
				}
			}
			if(allHidden){
				categories.item(i).style.display="none";
			}
			else{
				categories.item(i).style.display="";
			}
		}
	}

	showAllCategories() {
		var categories = (<HTMLCollectionOf<HTMLLIElement>>document.getElementsByTagName("li"));
		var i;
		for(i=0; i<categories.length; i++){
			categories.item(i).style.display="";
		}
	}
}
