import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss', '../app.component.scss'],
})
export class ProductsPage implements OnInit {
  products: any[] = []; // Voeg deze regel toe

  constructor() { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.products = json; // Update deze regel
        console.log(json);
      })
      .catch(error => console.error('Error fetching products:', error));
  }
}