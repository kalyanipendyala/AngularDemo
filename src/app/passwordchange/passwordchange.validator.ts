import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'q';


export class PasswordChangeValidator{
   static  validOldPassword(control:AbstractControl){
        return new Promise((resolve)=>{
            if(control.value !== '1234')
                resolve({invalidOldPassword: true});
                else 
                resolve(null);
        });
    }
    static passwordsShouldMatch(control:AbstractControl){
        let newPassword = control.get("newPwd").value;
        let confirmPassword = control.get("confirmPwd").value;
        if(newPassword !== confirmPassword) 
           return{ passwordNotMatching: true };
        else 
        return null;
    }
}


