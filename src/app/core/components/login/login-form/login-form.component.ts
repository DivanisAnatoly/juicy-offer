import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  @Output() submitEvent = new EventEmitter(); 

  formGroup = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    if(this.formGroup.invalid){
      console.log("invalid form input")
      this.formGroup.markAllAsTouched();
      return;
    }
    this.submitEvent.next(this.formGroup.value);
  }

}
