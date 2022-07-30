import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  salesPersonList:SalesPerson[] = [
    new SalesPerson("Shweta", "Arora", "shwetha@gmail.com", 6000),
    new SalesPerson("Anand", "Mahajan", "anand@gmail.com", 3000),
    new SalesPerson("Romit", "Ganjoo", "romit@gmail.com", 1000),
    new SalesPerson("Rahul", "Dalbanjan", "rahul@gmail.com", 7000)
  ]
  ngOnInit(): void {
  }

  salesPersonModel:SalesPerson = new SalesPerson("", "", "", 0);

  onSubmit(){
    console.log(this.salesPersonModel);
  }
}
