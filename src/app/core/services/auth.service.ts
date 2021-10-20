import { UserLoginDTO } from '../../shared/DTOs/UserLoginDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(model:UserLoginDTO){
    this._http.post('http://localhost:5000/api/v1/Users/login',model).subscribe(res=>
    //this._http.get('https://localhost:5001/api/v1/Announcements/GetPaged?PageNumber=1&PageSize=2').subscribe(res=>
    {
      console.log(res);
    });
  }
}
