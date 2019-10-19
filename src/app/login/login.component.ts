import { Component, OnInit } from '@angular/core';
import { Scrumlog } from '../scrumuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
scrumUserModel = new Scrumlog('louis@linnux','@testing123','Building a web');

}
