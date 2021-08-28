import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  public str : string = "Hello from Parent";
  public parentData : string = "";

  public message : string = "";
  
  
}
