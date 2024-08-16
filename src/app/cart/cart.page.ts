import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../product-management-service.service';
import { Dialog } from '@capacitor/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss', '../app.component.scss'],
})
export class CartPage implements OnInit {
  cartProducts: any[] = [];

  constructor(private productService: ProductManagementService, private router: Router) { }

  ngOnInit() {
    this.loadCartProducts();
    console.log(this.cartProducts)
  }

  loadCartProducts() {
    this.cartProducts = this.productService.getCartProducts();
  }

  isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }

  getTotalPrice() {
    return parseFloat(this.cartProducts.reduce((acc, product) => acc + product.price, 0).toFixed(2));
  }

  removeProductFromCart(productId: string) {
    this.cartProducts = this.cartProducts.filter(product => product.id !== productId);
  }

  async checkCartBeforeCheckout() {
    if (this.isEmptyCart()) {
      await Dialog.alert({
        title: 'Cart is empty',
        message: 'Your cart is empty. Please add some products to your cart before proceeding to checkout.',
      });
    } else {
      this.router.navigate(['/order']);
    }
  }
}
