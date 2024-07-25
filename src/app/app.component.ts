import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Products', url: '/products', icon: 'list' },
    { title: 'Detail', url: '/detail', icon: 'star' },
    { title: 'Liked', url: '/liked', icon: 'heart' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
  ];
  constructor() {}
}
