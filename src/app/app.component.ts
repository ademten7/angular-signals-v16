import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { VehicleListComponent } from "./components/vehicle-list/vehicle-list.component";
import { CartService } from './services/cart.service';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NzIconModule,NzBadgeModule, NzLayoutModule, NzMenuModule, VehicleListComponent]
})
export class AppComponent {
  isCollapsed = false;
  cartService = inject(CartService)

  cartCount = computed(()=> this.cartService.cartItems().reduce((acc,item)=> acc+item.quantity,0));
}
