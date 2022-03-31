import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './auth/guard.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { TripComponent } from './views/trip/trip.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    canActivate: [GuardGuard],
    component: DashboardComponent
  },
  {
    path: 'trip',
    children : [
      // {
      //   path : '',
      //   component: TripListComponent,
      // },
      {
        path : ':id',
        component : TripComponent
      },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
