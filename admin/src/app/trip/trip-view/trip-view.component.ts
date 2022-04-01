import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trips } from 'src/app/Model/trips';
import { TripService } from 'src/app/services/trip/trip.service';

@Component({
  selector: 'app-trip-view',
  templateUrl: './trip-view.component.html',
  styleUrls: ['./trip-view.component.scss']
})
export class TripViewComponent implements OnInit {

  titleBreadcrumb = 'Trip view';
  trip: Trips;
  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.getBoatById();
  }

  getBoatById() {
    let id = this.route.snapshot.paramMap.get('id');
  
    if (id !== null) {
      this.tripService.getTripById(id).subscribe((response: any) => {
        const tripToShow = {
          id: response.data.id,
          ...response.data.attributes,
        }
        const boatData = response.data.attributes.boats.data;

        if (boatData.length > 0) {
          tripToShow.boat = {
            id: boatData[0].id,
            ...boatData[0].attributes
          }
        }
        this.trip = tripToShow as Trips;
      })
      
    }
  }
}
