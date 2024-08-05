import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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

}
