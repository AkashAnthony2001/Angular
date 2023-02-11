import { Component , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('tf') f!:NgForm
  title = 'tdf';

  onsubmit(){
    console.log(this.f.value)
  }
}
