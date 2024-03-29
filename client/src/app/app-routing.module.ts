import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './auth/guard.guard';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { TripComponent } from './views/trip/trip.component';
import { MytripsComponent } from './views/mytrips/mytrips.component';
import { PaiementsComponent } from './views/paiements/paiements.component';
import { TripsComponent } from './views/trips/trips.component';
import { CheckoutComponent } from './views/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    canActivate: [GuardGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'trips',
        children: [
          {
            path : '',
            component: TripsComponent,
          },
          {
            path : ':id',
            children: [
              {
                path : '',
                component : TripComponent
              },
              {
                path : 'checkout',
                component : CheckoutComponent
              }
            ]
          }
        ]

      },
      {
        path: 'mytrips',
        component: MytripsComponent,
      },
      {
        path: 'paiement',
        component: PaiementsComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
