import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() onclick:EventEmitter <any> = new EventEmitter()

  show(){
    let data={
      name:"Anthony",
      age:22,
      place:"Puducherry"
    }

    this.onclick.emit(data);

  }
}
