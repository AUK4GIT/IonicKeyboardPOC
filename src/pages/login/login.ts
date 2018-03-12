import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  alignvertical: boolean;
  bottomzeropadding: boolean;
  vertaligngrid: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.alignvertical = this.navParams.get("alignvertical");
    this.bottomzeropadding = this.navParams.get("bottomzeropadding");
    this.vertaligngrid = this.navParams.get("vertaligngrid");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
