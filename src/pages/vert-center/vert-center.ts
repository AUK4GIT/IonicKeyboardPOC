import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-vert-center',
  templateUrl: 'vert-center.html',
})
export class VertCenterPage {

  alignvertical: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.alignvertical = this.navParams.get("alignvertical");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VertCenterPage');
  }

  toggleverticalclass(){
    this.alignvertical = !this.alignvertical;
  }

}
