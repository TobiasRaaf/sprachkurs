import { Component, OnInit } from '@angular/core';
import { DictEntry } from '../../dictEntry'
import { DictCategory } from '../../dictCategory';
import { EntryService } from '../../../entry.service';

@Component({
  selector: 'app-preposition',
  templateUrl: './preposition.component.html',
  styleUrls: ['./preposition.component.css']
})
export class PrepositionComponent implements OnInit {

  
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
  caseChecked(caseString) {
    var label = document.getElementById("checkbox-div-"+caseString);

    if(label.classList.contains("checked")){
      label.classList.remove("checked");
    }
    else{
      label.classList.add("checked");
    }
  }
}
