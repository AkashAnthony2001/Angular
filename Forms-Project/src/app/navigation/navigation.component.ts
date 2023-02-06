import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(public route:Router){}
home(){
  this.route.navigateByUrl("home");
}
about(){
  this.route.navigateByUrl("about");
}
contact(){
  this.route.navigateByUrl("contact");
}
login(){
  this.route.navigateByUrl("login");
}
}
