import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	showCategoryMask(event, categoryName) {
		var i, masks, categories;

    masks = document.getElementsByClassName("tab-content");
    for (i = 0; i < masks.length; i++) {
      masks[i].style.display = "none";
    }

    categories = document.getElementsByClassName("tab-categories");
    for (i = 0; i < categories.length; i++) {
      categories[i].className = categories[i].className.replace(" active", "");
    }

    document.getElementById(categoryName).style.display = "block";
    document.getElementById("tab-"+categoryName).classList.add("active");
	}
}
