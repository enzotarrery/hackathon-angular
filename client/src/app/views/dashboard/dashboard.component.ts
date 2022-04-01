import { Component, OnInit } from '@angular/core';
import { Boat } from 'src/app/core/models/boat';
import { Stuff } from 'src/app/core/models/stuff';
import { Trip } from 'src/app/core/models/trip';
import { BoatService } from 'src/app/core/services/boat.service';
import { StuffService } from 'src/app/core/services/stuff.service';
import { TripService } from 'src/app/core/services/trip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  trips$: Trip[] = []
  boat: Boat
  stuff: Stuff
  tripPercentage: number = 0
  searchword: string = ''

  constructor(private tripService: TripService, private stuffService: StuffService,private boatService: BoatService) { }

  ngOnInit(): void {
    this.floodValues()
  }

  floodValues(){
    this.getStuff();
    this.getBoat();    
    this.getTrips();
  }

  getStuff(){
    let stuffId = '1'
    this.stuffService
    .getStuff(stuffId)
    .subscribe(response => {
      let attributes = response.data.attributes;
      
      this.stuff = {
        id : response.data.id,
        label: attributes.label,
        weight: attributes.weight,
        volume: attributes.volume,
      }

    });    
  }

  getBoat() {
    let boatId = '1'
    this.boatService
    .getBoat(boatId)
    .subscribe(response => {
      let attributes = response.data.attributes;
      this.boat = {
        id : response.data.id,
        name: attributes.name,
        length: attributes.length,
        width: attributes.width,
        depth: attributes.depth,
        height: attributes.height,
        maxWeigth: attributes.maxWeigth,
        maxVolume: attributes.maxVolume,
      }
      console.log(this.boat);
      
    });
    
  }

  getTrips() {
    this.tripService.getTrips().subscribe(response => {
      this.trips$ = response.data.map((item: any) => {
       const trip = {
          id: item.id,
          ...item.attributes,
          boat: this.boat,
          stuff: this.stuff,
        }
        return trip;
      })
      console.log(this.trips$);
      this.tripPercentage = (this.trips$.filter(trip => trip.state == 'arrived').length / this.trips$.length)* 100      
    });
  }

  /* searchStuff() {
    this.stuffService.searchStuff(this.searchword).subscribe(response => {
      let attributes = response.data.attributes;
      
      this.stuff = {
        id : response.data.id,
        label: attributes.label,
        weight: attributes.weight,
        volume: attributes.volume,
      }
    });
  } */
}
