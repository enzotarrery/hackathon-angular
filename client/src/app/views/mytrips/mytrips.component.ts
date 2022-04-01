import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/models/trip';
import { TripService } from 'src/app/core/services/trip.service';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.scss']
})
export class MytripsComponent implements OnInit {
    trips$: Trip[] = []

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.getTrips()
  }

  getTrips() {
    this.tripService.getTrips().subscribe(response => {
      this.trips$ = response.data.map((item: any) => {
       const trip = {
          id: item.id,
          ...item.attributes,
        }
        return trip;
      })
      console.log(this.trips$);
    });
  }
}
