import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isSelected:boolean;
  viewMode:String;
  constructor() {
    this.viewMode = "hidden";
   }
  onClick(){
    this.isSelected = ! this.isSelected;
    console.log(this.isSelected);
  }

  ngOnInit() {
  }

}
