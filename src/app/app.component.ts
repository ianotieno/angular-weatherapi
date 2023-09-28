import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  FirstName="Agutu"
  lastname=""
  otieno:string="welcome"
  public person={
    "firstName":"john",
    "lastName": "Doe"
  }
}
