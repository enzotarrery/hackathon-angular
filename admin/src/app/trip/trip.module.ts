import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { TripRoutingModule } from './trip-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripFormComponent } from './trip-form/trip-form.component';
import { TripViewComponent } from './trip-view/trip-view.component';
import { TripService } from '../services/trip/trip.service';


@NgModule({
  declarations: [
    TripListComponent,
    TripFormComponent,
    TripViewComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TripService,
   ],
})
export class TripModule { }
