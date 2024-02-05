import { Component, computed, inject } from '@angular/core';
import { NgFor, NgClass, NgIf, AsyncPipe } from '@angular/common';
import { EMPTY, catchError } from 'rxjs';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle';
import { VehicleDetailComponent } from "../vehicle-detail/vehicle-detail.component";
import { CartListComponent } from "../cart-list/cart-list.component";
import { CartTotalComponent } from "../cart-total/cart-total.component";

@Component({
    selector: 'app-vehicle-list',
    standalone: true,
    templateUrl: './vehicle-list.component.html',
    imports: [AsyncPipe, NgClass, NgFor, NgIf, VehicleDetailComponent, CartListComponent, CartTotalComponent]
})
export class VehicleListComponent{
  pageTitle = 'Vehicles';
  errorMessage = '';
  vehicleService = inject(VehicleService);
 
  // Component signals
  vehicles = computed(() => {
    try {
      return this.vehicleService.vehicles();
    } catch (e) {
      this.errorMessage = typeof e === 'string'? e : 'Error';
      return [];
    }
  });
  selectedVehicle = this.vehicleService.selectedVehicle;

  // When a vehicle is selected, emit the selected vehicle name
  onSelected(vehicleName: string): void {
    this.vehicleService.vehicleSelected(vehicleName);
  }
}
