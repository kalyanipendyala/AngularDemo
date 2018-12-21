import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
 name ="click to type in"; 

 onKeyup(value){
   console.log("name is "+value);
 }
 onClick(){
  this.name = "";
 }
  constructor() { }

  ngOnInit() {
  }

}
