import { Component } from '@angular/core';
import { UserLogin } from '../Models/userLogin.model'

@Component({
  selector: 'fancy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user : UserLogin = new UserLogin();
  login():void{
    console.log(this.user);
    localStorage.setItem('currentUser',JSON.stringify({"id":""}));
  }
}