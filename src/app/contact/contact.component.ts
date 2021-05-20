import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name;
email;
message;
  constructor() { }

  ngOnInit(): void {
  }
submitForm(){const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
alert(allInfo); }
}
