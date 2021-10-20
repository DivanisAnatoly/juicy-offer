import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements OnInit {

  ngOnInit(): void {
    console.log('logger inited');
  }

  /** 
   * @param logMessage выводимое сообщение 
   */
  public write(logMessage:string){
    console.log(logMessage, (new Date()).toISOString());
  }
}
