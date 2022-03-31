import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SharedModule } from '../Shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CustomersService } from '../services/customers.service';

@NgModule({
  declarations: [
    CustomersListComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [
    CustomersService,
   ],
})
export class CustomersModule { }
