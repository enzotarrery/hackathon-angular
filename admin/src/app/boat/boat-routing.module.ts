import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoatRoutingModule { }
