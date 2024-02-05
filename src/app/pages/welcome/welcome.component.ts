import { Component, OnInit } from '@angular/core';
import { VehicleListComponent } from "../../components/vehicle-list/vehicle-list.component";

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [VehicleListComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
