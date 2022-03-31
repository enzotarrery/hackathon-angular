import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoatRoutingModule } from './boat-routing.module';
import { BoatsListComponent } from './boats-list/boats-list.component';
import { BoatsFormComponent } from './boats-form/boats-form.component';


@NgModule({
  declarations: [
    BoatsListComponent,
    BoatsFormComponent
  ],
  imports: [
    CommonModule,
    BoatRoutingModule
  ]
})
export class BoatModule { }
