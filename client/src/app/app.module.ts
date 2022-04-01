import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NavbarComponent } from './shared/dashboard/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoatService } from './core/services/boat.service';
import { TripService } from './core/services/trip.service';
import { UserService } from './core/services/user.service';
import { TokenStorageService } from './core/services/token-storage.service';
import { LogoutComponent } from './auth/logout/logout.component';
import { HeadComponent } from './shared/dashboard/head/head.component';
import { TripsComponent } from './views/trips/trips.component';
import { PaiementsComponent } from './views/paiements/paiements.component';
import { MytripsComponent } from './views/mytrips/mytrips.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    HeadComponent,
    TripsComponent,
    PaiementsComponent,
    MytripsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BoatService, TripService, UserService, TokenStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
