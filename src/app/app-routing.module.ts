import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//импортируем страницы
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { OffersComponent } from './pages/offers/offers.component';
import { MyOffersComponent } from './pages/my-offers/my-offers.component';
import { AddOfferComponent } from './pages/add-offer/add-offer.component';
import { EditOfferComponent } from './pages/edit-offer/edit-offer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

//URL Matching
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'my-offers', component: MyOffersComponent},
  {path: 'add-offer', component: AddOfferComponent},
  {path: 'my-offers/edit-offer', component: EditOfferComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
