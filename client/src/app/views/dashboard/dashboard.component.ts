import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StuffTypeService } from 'src/app/core/service/stuff-type.service';
import { TripService } from 'src/app/core/service/trip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  trips: Observable<any> = new Observable
  stuffs: Observable<any> = new Observable
  searchword: string = ''

  constructor(private tripService: TripService, private stuffTypeService: StuffTypeService) { }

  ngOnInit(): void {
    //this.getTrips();
  }

  getTrips() {
    this.trips = this.tripService.getTrips()
  }

  searchStuff() {
    this.trips = this.stuffTypeService.searchStuff(this.searchword)
  }
}
