import { Component, OnInit, computed, inject } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { catchError, EMPTY, map, tap } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, DecimalPipe],
  templateUrl: './vehicle-detail.component.html'
})
export class VehicleDetailComponent implements OnInit{
  errorMessage = '';
  cartService = inject(CartService);
  vehicleService = inject(VehicleService);

  vehicle = this.vehicleService.selectedVehicle

  pageTitle = computed(()=> this.vehicle() ? `Detail for: ${this.vehicle()?.name}`: '' );

  vehicleFilms = this.vehicleService.vehicleFilms;
 
  ngOnInit(): void {
   console.log(this.pageTitle()); 
  }

  addToCart(vehicle: Vehicle | undefined) {
    if(vehicle){
      this.cartService.addToCart(vehicle);
    }

  }
}