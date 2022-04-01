import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from 'src/app/Model/Customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-profile',
  templateUrl: './customers-profile.component.html',
  styleUrls: ['./customers-profile.component.scss']
})
export class CustomersProfileComponent implements OnInit {
  titleBreadcrumb = 'Customers view';
  customer: Customers;

  constructor(
    private customerService: CustomersService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.customerService.getCustomerById(id).subscribe((response) => {
        this.customer = response as Customers;
      })
      
    }
  }

}
