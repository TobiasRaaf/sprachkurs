import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
			window.onscroll = function() {stickyFunction()};
			
			var menu = document.getElementById("menu");
			
			var sticky = menu.offsetTop;
			
			function stickyFunction() {
					if(window.pageYOffset >= sticky) {
						menu.classList.add("sticky");
					}
					else {
						menu.classList.remove("sticky");
					}
			}
  }
}
