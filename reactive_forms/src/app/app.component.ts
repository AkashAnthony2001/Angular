import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactive_forms';

  email = new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]);
  pass = new FormControl();

  constructor( private route:Router){
    // this.email.valueChanges.subscribe(data => {console.log(data);});
    this.email.statusChanges.subscribe(data => {console.log(data);});
  }

  show(){
    console.log(this.email,this.pass);
  }



warning:string=""
  signupForm!: FormGroup;

  ngOnInit(){
    this.signupForm=new FormGroup({
      'email' : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
      'pass' : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)])
    });
  }

  submit(){
    if(this.email.value == "Kavi" && this.pass.value == "kavi"){
      this.route.navigateByUrl("/forms")
    }
    else{
      let msg="Worng Cred !"
      this.warning=msg
    }
  }
}
