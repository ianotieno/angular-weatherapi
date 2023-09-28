import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
@Input() FirstName!:string;
@Output()LastName =new EventEmitter()

fireEvent(){
  this.LastName.emit('hello sir')
}
}
