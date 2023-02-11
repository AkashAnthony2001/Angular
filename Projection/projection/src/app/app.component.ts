import { Component } from '@angular/core';
import { ObjserviceService } from './objservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projection';
  users:any[]=[];
  user:any[]=[];
  constructor(private obj : ObjserviceService){
    this.users=this.obj.getusers();
    this.obj.getusersApi().subscribe((gokul:any) => {this.user=gokul;});
  }

  
}
