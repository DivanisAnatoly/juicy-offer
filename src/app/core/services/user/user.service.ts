import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){ }

  getUser(){
    return this.http.get('assets/fakebackend/user.json')
  }

  getUsers(){
    return this.http.get('assets/fakebackend/users.json')
}
}
