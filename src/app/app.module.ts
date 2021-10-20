//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//primeng
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

//компоненты
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

//страницы
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { OffersComponent } from './pages/offers/offers.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MyOffersComponent } from './pages/my-offers/my-offers.component';
import { AddOfferComponent } from './pages/add-offer/add-offer.component';
import { EditOfferComponent } from './pages/edit-offer/edit-offer.component';


//роутинг (для переключения между модулями приложения)
import { AppRoutingModule } from './app-routing.module';

//модуль ядра приложения
import { CoreModule } from './core/core.module';
import { AuthModule } from './modules/auth/auth.module';

//сервисы
import { LoggerService } from './shared/services/logger.service';



//метаданные приложения
@NgModule({
  //предоставляет для внеш доступа
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignUpComponent,
    OffersComponent,
    AdminComponent,
    MyOffersComponent,
    AddOfferComponent,
    EditOfferComponent
  ],
  //зависимости
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CoreModule,
    AuthModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})

export class AppModule { }