import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Stuff } from 'src/app/core/models/stuff';
import { Trip } from 'src/app/core/models/trip';
import { StuffTypeService } from 'src/app/core/services/stuff-type.service';
import { TripService } from 'src/app/core/services/trip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  trips$: Trip[] = []
  stuffs$: Observable<Stuff[]> = new Observable
  tripPercentage: number = 0
  searchword: string = ''

  constructor(private tripService: TripService, private stuffTypeService: StuffTypeService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  searchStuff() {
    this.stuffs$ = this.stuffTypeService.searchStuff(this.searchword)
  }

  getTrips() {
    this.tripService.getTrips().subscribe(response => {
      this.trips$ = response.data.map((item: any) => {
       const trip = {
          id: item.id,
          ...item.attributes,
          boat: {},
          stuff: {}
        }
        return trip;
      })
      this.tripPercentage = (this.trips$.filter(trip => trip.state == 'arrived').length / this.trips$.length)* 100
      console.log(this.trips$);
      
    });
  }

}
