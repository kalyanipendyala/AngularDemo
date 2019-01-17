import { PasswordChangeValidator } from './passwordchange.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordchangeComponent {
  form = new FormGroup({
    oldPwd:new FormControl('',Validators.required,
      PasswordChangeValidator.validOldPassword
      ),
    newPwd:new FormControl ('',Validators.required),
    confirmPwd: new FormControl('',Validators.required)

  },PasswordChangeValidator.passwordsShouldMatch);
 
  get oldPwd(){
   return  this.form.get("oldPwd");
  }
  get newPwd(){
   return this.form.get("newPwd");
  }
  get confirmPwd(){
    return this.form.get("confirmPwd");
  }

  constructor() {
    
   }

 

}
