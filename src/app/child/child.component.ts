import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public str : string = "";
  public tipContent : string = "Enter Text";

  //Access data from parent
  @Input() public parentData = "";

  //Send data Using EventEmitter from child to parent
  @Output() public myEvent = new EventEmitter();

  constructor() {}

  public sendData() 
  {
    this.str = "Hello from Child";
    //Emit data from child to parent
    this.myEvent.emit(this.str)
  }

  ngOnInit(): void {
  }

}
