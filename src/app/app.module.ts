//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

//primeng
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
// import {DropdownModule} from 'primeng/dropdown';

//компоненты
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

//ѝтраницы
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { OffersComponent } from './pages/offers/offers.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MyOffersComponent } from './pages/my-offers/my-offers.component';
import { AddOfferComponent } from './pages/add-offer/add-offer.component';
import { EditOfferComponent } from './pages/edit-offer/edit-offer.component';


//роутинг (длѝ переключениѝ между модулѝми приложениѝ)
import { AppRoutingModule } from './app-routing.module';

//модуль ѝдра приложениѝ
import { CoreModule } from './core/core.module';
import { AuthModule } from './modules/auth/auth.module';

//ѝервиѝы
import { LoggerService } from './shared/services/logger.service';
import { OffersModule } from './modules/offers/offers.module';
import { OfferDescriptionComponent } from './pages/offer-description/offer-description.component';



//метаданные приложениѝ
@NgModule({
  //предоѝтавлѝет длѝ внеш доѝтупа
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
    EditOfferComponent,
    OfferDescriptionComponent
  ],
  //завиѝимоѝти
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CoreModule,
    AuthModule,
    HttpClientModule,
    OffersModule,
    DividerModule,
    // DropdownModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})

export class AppModule { }