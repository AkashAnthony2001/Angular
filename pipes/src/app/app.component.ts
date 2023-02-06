import { Component } from '@angular/core';
import { Person } from "src/app/modules/Classes"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  d:Date=new Date();

name:string=""
age:number=0;
height:any=""
weight:any=""
qual:string=""

  value:number=1000;


  constructor(per:Person){
    this.name=per.getinfo();
  }


}
