import { Component, ViewChild } from '@angular/core';
import { WeekComponent } from '../chart/week/week.component';
import { SaleComponent } from '../chart/sale/sale.component';
import { ProfitComponent } from '../chart/profit/profit.component';
import { ProductComponent } from '../chart/product/product.component';
import { CustomerComponent } from '../chart/customer/customer.component';
import { TargetComponent } from '../chart/target/target.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WeekComponent,
    SaleComponent,
    ProfitComponent,
    ProductComponent,
    CustomerComponent,
    TargetComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
