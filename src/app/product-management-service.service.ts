import { Injectable } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductManagementService {
  likedProducts: Product[] = [];
  cartProducts: Product[] = [];

  addToLiked(product: Product) {
    this.likedProducts.push(product);
  }

  addToCart(product: Product) {
    this.cartProducts.push(product);
  }

  getLikedProducts(): Product[] {
    return this.likedProducts;
  }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }
}