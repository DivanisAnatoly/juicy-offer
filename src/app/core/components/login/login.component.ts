import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent{

  constructor(private _authModule: AuthService) { }

  login(loginModel:any){
    this._authModule.login(loginModel);
  }


}
