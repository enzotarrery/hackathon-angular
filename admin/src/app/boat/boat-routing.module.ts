import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatViewComponent } from './boat-view/boat-view.component';
import { BoatsFormComponent } from './boats-form/boats-form.component';
import { BoatsListComponent } from './boats-list/boats-list.component';

const routes: Routes = [
  {
    path: '',
    component: BoatsListComponent 
  },
  {
    path: 'create',
    component: BoatsFormComponent
  },
  {
    path: ':id',
    component: BoatViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoatRoutingModule { }
