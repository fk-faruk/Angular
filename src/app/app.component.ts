import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ApiService } from './api.service';
import { Customer } from './component/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tableproject';
  gender: string = '';
  p: number = 1;
  searchText: any = '';

  customers: Customer[] = [];
  maleCustomers: Customer[] = [];
  femaleCustomers: Customer[] = [];

  // customers : Array<Customer> = []

  constructor(private api: ApiService) {}

  onGetallCustomers() {
    this.api.GetallCustomer().subscribe({
      next: (data: any) => {
        this.customers = data;
        this.maleCustomers = this.customers.filter(
          (customer: any) => customer.Gender === 'male'
        );
        this.femaleCustomers = this.customers.filter(
          (customer: any) => customer.Gender === 'female'
        );

        console.log('females>>', this.femaleCustomers);
        console.log('male>>', this.maleCustomers);

        console.log('this customers>>', this.customers);
      },
      error: (err) => {
        console.log(err);
      },
      complete() {},
    });
  }

  onChangeGender(e: any) {
    this.gender = e;
    if (this.gender === 'male') {
      this.customers = this.maleCustomers;
    } else if (this.gender === 'female') {
      this.customers = this.femaleCustomers;
    } else {
      console.log('value..');
    }
  }

  ngOnInit(): void {
    initFlowbite();
    this.onGetallCustomers();
  }
}
// console.error();
