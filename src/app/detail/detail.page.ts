import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductManagementService } from '../product-management-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss', '../app.component.scss'],
})
export class DetailPage implements OnInit {
  product: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductManagementService) { }

  ngOnInit() {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras && currentNavigation.extras.state) {
      this.product = currentNavigation.extras.state['product'];
    }

    if (!this.product) {
      console.error('Productdata niet gevonden, navigeer terug naar productenlijst.');
      this.router.navigate(['/']);
    }   
  }
  addToCart(product: any) {
    this.productService.addToCart(product);
    console.log('Product added to cart:', product);
  }
}