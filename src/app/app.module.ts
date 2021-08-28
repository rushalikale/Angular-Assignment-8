import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AlertModule} from 'ngx-bootstrap/alert'
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
