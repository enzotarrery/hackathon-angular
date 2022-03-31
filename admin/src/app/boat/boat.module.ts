import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoatRoutingModule } from './boat-routing.module';
import { BoatsListComponent } from './boats-list/boats-list.component';
import { BoatsFormComponent } from './boats-form/boats-form.component';
import { SharedModule } from '../Shared/shared.module';
import { BoatService } from '../services/Boat/boat.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BoatsListComponent,
    BoatsFormComponent
  ],
  imports: [
    CommonModule,
    BoatRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [BoatService]
})
export class BoatModule { }
