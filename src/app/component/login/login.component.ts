import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success: string="Your Successfully LogedIn"
  username: string="kruthi"
  password: string="para@12char"
  constructor() { }

  ngOnInit(): void {
  }

}
