import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss', '../app.component.scss'],
})
export class ProductsPage implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = []; // Voeg deze regel toe
  searchTerm: string = ''; // Voeg deze regel toe

  constructor() { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.products = json;
        this.filteredProducts = json; // Update deze regel
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
}