import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: '<app-header></app-header><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  
  
  name:string;
}
