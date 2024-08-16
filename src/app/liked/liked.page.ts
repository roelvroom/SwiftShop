import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../product-management-service.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss', '../app.component.scss'],
})
export class LikedPage implements OnInit {
  likedProducts: any[] = [];

  constructor(private productService: ProductManagementService) { }

  ngOnInit() {
    this.loadLikedProducts();
    console.log(this.likedProducts)
  }

  loadLikedProducts() {
    this.likedProducts = this.productService.getLikedProducts();
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
    console.log('Product added to cart:', product);
  }
}
