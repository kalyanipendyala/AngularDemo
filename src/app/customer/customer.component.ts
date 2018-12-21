import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
   firstName :String;
   lastName :String;
   age;
   gender;
   
   onKeyup(){
     console.log("firstName:"+this.firstName
                 +"lastName:"+this.lastName
                +"age:"+this.age
                +"gender"+this.gender);

   }
  constructor() { }

  ngOnInit() {
  }

}
