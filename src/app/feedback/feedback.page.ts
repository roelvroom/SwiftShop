import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(private NavCrtl: NavController) { }

  BackHome() {
    this.NavCrtl.navigateForward('/home');
  }

  ngOnInit() {
  }

}
