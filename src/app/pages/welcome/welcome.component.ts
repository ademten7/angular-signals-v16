import { Component, OnInit } from '@angular/core';
import { VehicleListComponent } from "../../components/vehicle-list/vehicle-list.component";
import { CartListComponent } from "../../components/cart-list/cart-list.component";

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [VehicleListComponent, CartListComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
