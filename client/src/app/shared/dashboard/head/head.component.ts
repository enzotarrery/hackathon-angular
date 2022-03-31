import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/models/trip';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  @Input() trips: Trip[] = []
  tripNumber: number = 0
  nextTripDate: string = ''
  totalWeight: number = 0

  constructor() { }

  ngOnInit(): void {
    this.floodValues()
  }


  floodValues(){    
    this.tripNumber = this.trips.length
    this.totalWeight = this.trips.length
  }
}
