import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripFormComponent } from './trip-form/trip-form.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripViewComponent } from './trip-view/trip-view.component';

const routes: Routes = [
  {
    path: '',
    component: TripListComponent
  },
  {
    path: 'create',
    component: TripFormComponent
  },
  {
    path: ':id',
    component: TripViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
