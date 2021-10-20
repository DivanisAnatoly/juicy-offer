import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {InputMaskModule} from 'primeng/inputmask';
import {DialogModule} from 'primeng/dialog';

import { AddsListComponent } from './components/adds-list/adds-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DynamicDialogComponent } from './components/dynamic-dialog/dynamic-dialog.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';

@NgModule({
  declarations: [
    AddsListComponent,
    LoginComponent,
    SignUpComponent,
    DynamicDialogComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DialogModule,
    TabViewModule,
    InputMaskModule,
    HttpClientModule
  ],
  exports:[
    AddsListComponent
  ]
})
export class CoreModule { }
