import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../product-management-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', '../app.component.scss'],
})
export class HomePage implements OnInit {

  constructor(private productService: ProductManagementService) { }

  ngOnInit() {
  }

}
