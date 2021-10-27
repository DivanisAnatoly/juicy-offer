import { AppRoutingModule } from './../../app-routing.module';
//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {InputMaskModule} from 'primeng/inputmask';
import {DialogModule} from 'primeng/dialog';

//комроненты
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';






@NgModule({
  declarations: [
    LoginFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputMaskModule,
    AppRoutingModule,
  ],
  exports:[
    LoginFormComponent,
    SignUpFormComponent
  ]
})
export class AuthModule { }
