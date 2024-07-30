import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../product-management-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss', '../app.component.scss'],
})
export class ProductsPage implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = []; 
  searchTerm: string = '';

  constructor(private router: Router, private productService: ProductManagementService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.products = json;
        this.filteredProducts = json;
        console.log(json);
      })
      .catch(error => console.error('Error fetching products:', error));
  }

  searchProducts() {
    if (!this.searchTerm) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
    console.log('Product added to cart:', product);
  }
  
  addToLiked(product: any) {
    this.productService.addToLiked(product);
    console.log('Product added to liked:', product);
  }

  navigateToProductDetail(product: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        product: product
      }
    };
    this.router.navigate(['/detail'], navigationExtras);
  }
}