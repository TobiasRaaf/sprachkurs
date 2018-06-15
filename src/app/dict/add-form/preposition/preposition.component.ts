import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '../../mock-dict';
import { CATEGORIES } from '../../mock-categories';

@Component({
  selector: 'app-preposition',
  templateUrl: './preposition.component.html',
  styleUrls: ['./preposition.component.css']
})
export class PrepositionComponent implements OnInit {

  entries = ENTRIES;
  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit() {
  }

  caseChecked(caseString) {
    var checkBox = document.getElementById(caseString) as HTMLInputElement;

    var label = document.getElementById("checkbox-div-"+caseString);

    if(checkBox.checked == true){
      label.classList.add("checked");
    }
    else{
      label.className.replace(" checked", "");
    }
  }
}
