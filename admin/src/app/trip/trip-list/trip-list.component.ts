import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { Trips } from 'src/app/Model/trips';
import { TripService } from 'src/app/services/trip/trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements AfterViewInit {
  titleBreadcrumb = 'Trip List';
  @ViewChild('paginator') paginator: MatPaginator;

  // forms
  dataSource: MatTableDataSource<Trips>;
  displayedColumns: string[] = [
    'startDate',
    'endDate',
    'destination',
    'departure',
    'state',
    'actions'
  ];
  trips: Trips[];
  pageSizeOptions: number[] = [10, 25, 50];
  pageSize = 10;

  // MatPaginator Output
  pageEvent: PageEvent;

 
  constructor(
    private tripService: TripService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.getBoats();
  }

  getBoats() {
    this.tripService.getTrips().subscribe(response => {
     
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
    this.router.navigate([`/trips/${row.id}`]);
  }
}
