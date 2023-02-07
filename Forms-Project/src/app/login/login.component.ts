import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
changetype:boolean=true;
  isChecked="";
  toggle(evt:any){
    this.isChecked=evt.target.checked;
    this.changetype =! this.changetype;
  }
}

