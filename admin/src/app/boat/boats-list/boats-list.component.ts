import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Boats } from 'src/app/Model/Boats';
import { BoatService } from 'src/app/services/Boat/boat.service';

@Component({
  selector: 'app-boats-list',
  templateUrl: './boats-list.component.html',
  styleUrls: ['./boats-list.component.scss']
})
export class BoatsListComponent implements AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;
  titleBreadcrumb = 'Boat List';
  // forms
  dataSource: MatTableDataSource<Boats>;
  displayedColumns: string[] = [
    'name',
    'length',
    'width',
    'depth',
    'height',
    'maxWeigth',
    'maxVolume',
    'actions'
  ];
  boats: Boats[];
  pageSizeOptions: number[] = [10, 25, 50];
  pageSize = 10;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(
    private boatService: BoatService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.getBoats();
    console.log('init')
  }

  getBoats() {
    this.boatService.getBoats().subscribe(response => {
     
      const updatedboat = response.data.map((item: any) => {
        return {
          id: item.id,
          ...item.attributes,
        }
      })
      this.dataSource = new MatTableDataSource(updatedboat);
      this.dataSource.paginator = this.paginator;
    });
  }
  setPage($event: PageEvent) {
    console.log($event, 'event')
  }
  onRowClicked(row: any) {
    this.router.navigate([`/boats/${row.id}`]);
  }

}
