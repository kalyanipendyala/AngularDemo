import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isSelected: boolean;
  viewMode: String;
  switchView: String

  courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" }
  ]
  constructor() {
    this.viewMode = "ngIf";
    this.switchView = "map";
  }
  onClick() {
    this.isSelected = !this.isSelected;
    console.log(this.isSelected);
  }
  onAdd() {
    this.courses.push({
      id: 4, name:
        "course4"
    });
  }
  onDelete(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index);
  }
  changeViewMode(mode) {
    this.viewMode = mode;
    return false;
  }

  ngOnInit() {
  }

}
