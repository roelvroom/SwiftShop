import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Toast } from '@capacitor/toast';


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  async FeedbackPage() {
    this.navCtrl.navigateForward('/feedback');
  }

  ngOnInit() {
  }


  showOrderConfirmation = async () => {
    await Toast.show({
      text: 'Order placed successfully!',
      duration: 'long',
    });
  };


}
