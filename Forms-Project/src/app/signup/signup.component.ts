import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  places = ["AndhraPradesh","ArunachalPradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","HimachalPradesh","Jharkhand","Karnataka","Kerala","MadhyaPradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","TamilNadu","Telangana","Tripura","UttarPradesh","Uttarakhand","WestBengal"]



  signup !: FormGroup;
ngOnInit(){
  this.signup=new FormGroup({
'firstname' : new FormControl('',[Validators.required]);
'lastname' : new FormControl('',[Validators.required]);
'email' : new FormControl('',[Validators.required,Validators.email]);
'password' : new FormControl('',[Validators.required,]);
'confirm' : new FormControl('',[Validators.required]);
'gender' : new FormControl('',Validators.required);
'phone' : new FormControl('',[Validators.required]);
'agree' : new FormControl('',Validators.required);
  });
}
}
