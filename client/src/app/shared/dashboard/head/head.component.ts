import { Component, Input, OnInit } from '@angular/core';
import { Stuff } from 'src/app/core/models/stuff';
import { Trip } from 'src/app/core/models/trip';
import { StuffService } from 'src/app/core/services/stuff.service';
import { TripService } from 'src/app/core/services/trip.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  trips: Trip[] = []
  stuffs: Stuff[] = []
  tripNumber: number = 0
  nextTripDate: string = '15/04'
  totalWeight: number = 0

  constructor(private tripService: TripService,private stuffService: StuffService) { }

  ngOnInit(): void {
    this.getTrips()
    this.getStuffs()  
  }

  getTrips() {
    this.tripService.getTrips().subscribe(response => {
      this.trips = response.data.map((item: any) => {
       const trip = {
          id: item.id,
          ...item.attributes,
        }
        return trip;
      })
      this.tripNumber = this.trips.length
    });
  }

  getStuffs() {
    this.stuffService.getStuffs().subscribe(response => {
      this.stuffs = response.data.map((item: any) => {
       const stuff = {
          id: item.id,
          ...item.attributes,
        }
        return stuff;
      })
      console.log(this.stuffs);
      
      this.stuffs.forEach(element => {
        this.totalWeight += element.weight
      });
    });
  }

}
