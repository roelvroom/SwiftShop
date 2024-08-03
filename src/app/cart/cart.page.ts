import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../product-management-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss', '../app.component.scss'],
})
export class CartPage implements OnInit {
  cartProducts: any[] = [];

  constructor(private productService: ProductManagementService) { }

  ngOnInit() {
    this.loadCartProducts();
    console.log(this.cartProducts)
  }

  loadCartProducts() {
    this.cartProducts = this.productService.getCartProducts();
  }

  getTotalPrice() {
    return this.cartProducts.reduce((acc, product) => acc + product.price, 0);
  }
}
