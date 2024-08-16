import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../product-management-service.service';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';


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

  removeFromLiked(selectedProduct: any) {
    this.likedProducts = this.likedProducts.filter(product => product.id !== selectedProduct.id);
  
    console.log('Product verwijderd uit gelikte producten:', selectedProduct);
  }

  
  async showEditOptions(selectedProduct: any) {
    const result = await ActionSheet.showActions({
      title: 'Bewerk Opties',
      message: 'Kies een actie om uit te voeren',
      options: [
        {
          title: 'Toevoegen aan winkelwagen',
        },
        {
          title: 'Verwijderen uit gelikte producten',
          style: ActionSheetButtonStyle.Destructive
        },
        {
          title: 'Annuleren',
          style: ActionSheetButtonStyle.Cancel
        }
      ]
    });
  
    console.log('Geselecteerde actie:', result);
  
    if (result.index === 0) {
      this.addToCart(selectedProduct);
    } else if (result.index === 1) {
      this.removeFromLiked(selectedProduct);
    }
  };
}
