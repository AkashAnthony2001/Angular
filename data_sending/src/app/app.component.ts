import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data_sending';

  name:string="";
  age:any="";
  place:string="";
    view(data:any){
    this.name=data.name;
    this.age=data.age;
    this.place=data.place;
  }


}
