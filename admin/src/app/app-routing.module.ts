import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent
  },
  {
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module')
      .then( m => m.CustomersModule)
  },
  {
    path: 'boat', 
    loadChildren: () => import('./boat/boat.module')
      .then( m => m.BoatModule)
  },
  {
    path: 'trips', 
    loadChildren: () => import('./trip/trip.module')
      .then( m => m.TripModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
