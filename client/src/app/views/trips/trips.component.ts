import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trip } from 'src/app/core/models/trip';
import { TripService } from 'src/app/core/services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements AfterViewInit {

  @ViewChild('paginator') paginator: MatPaginator;

  // forms
  dataSource: MatTableDataSource<Trip>;
  displayedColumns: string[] = [
    'boat',
    'departure',
    'destination',
    'startDate',
    'endDate',
    'weight',
    'state',
    'actions'
  ];
  trips: Trip[];
  pageSizeOptions: number[] = [10, 25, 50];
  pageSize = 10;

  constructor(
    private tripService: TripService,
    private router: Router,
  ) {}
  ngAfterViewInit() {
    this.getTrips();
  }

  getTrips() {
    this.tripService.getTrips().subscribe(response => {
     console.log(response, 'response')
      const updatedTrip = response.data.map((item: any) => {
       const trip = {
          id: item.id,
          ...item.attributes,
          boat: {}
        }
        
        item.attributes.boats.data.forEach((element: any) => {
          trip.boat = {
            id: element.id,
            ...element.attributes
          };
        });
        return trip;
      })
      this.dataSource = new MatTableDataSource(updatedTrip);
      this.dataSource.paginator = this.paginator;
    });
  }
  setPage($event: PageEvent) {
    console.log($event, 'event')
  }
  onRowClicked(row: any) {
    this.router.navigate([`/${row.id}`]);
  }
}
