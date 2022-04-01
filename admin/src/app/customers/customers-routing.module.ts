import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersProfileComponent } from './customers-profile/customers-profile.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent
  },
  {
    path: ':id',
    component: CustomersProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
