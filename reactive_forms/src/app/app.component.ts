import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactive_forms';

  email = new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]);
  pass = new FormControl();

  constructor(){
    // this.email.valueChanges.subscribe(data => {console.log(data);});
    this.email.statusChanges.subscribe(data => {console.log(data);});
  }

  show(){
    console.log(this.email,this.pass);
  }



  signupForm!: FormGroup;

  ngOnInit(){
    this.signupForm=new FormGroup({
      'email' : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
      'pass' : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)])
    });
  }

  submit(){
    console.log(this.email,this.pass);
  }
}
