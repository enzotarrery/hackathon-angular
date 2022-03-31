import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customers } from 'src/app/Model/Customers';
import {PageEvent} from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements AfterViewInit {
  titleBreadcrumb = 'Customers List';
  @ViewChild('paginator') paginator: MatPaginator;

  // forms
  dataSource: MatTableDataSource<Customers>;
  displayedColumns: string[] = [
    'username',
    'firstname',
    'lastname',
    'email',
    'actions',
  ];
  customers: Customers[];
  pageSizeOptions: number[] = [10, 25, 50];
  pageSize = 10;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(
    private customerService: CustomersService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
    });
  }
  setPage($event: PageEvent) {
    console.log($event, 'event')
  }
  onRowClicked(row: any) {
    this.router.navigate([`/customer/${row.id}`]);
  }
}
