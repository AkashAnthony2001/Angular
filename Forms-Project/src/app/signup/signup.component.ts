import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
places = ["Andhra Pradesh" , ""]
firstname = new FormControl('',[Validators.required]);
lastname = new FormControl('',[Validators.required]);
email = new FormControl('',[Validators.required,Validators.email]);
password = new FormControl('',[Validators.required,]);
confirm = new FormControl('',[Validators.required]);
gender = new FormControl('',Validators.required);
phone = new FormControl('',[Validators.required]);
agree = new FormControl('',Validators.required);

}
