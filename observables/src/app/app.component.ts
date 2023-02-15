import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';
ngOnInit() : void{

  const obs$=new Observable(Subscriber=>
  {Subscriber.next("firstdata");
  Subscriber.next("seconddata");
  Subscriber.error("Error");
  Subscriber.next("thirddata");
  });


  obs$.subscribe((x)=>{
    console.log(x)
  // },(complete)=>{
  //   console.log(complete)
  },(error)=> {
    console.log(error)
  });
}


  

}
