import { Component } from '@angular/core';
import { NavController, Modal, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { VertCenterPage } from '../../pages/vert-center/vert-center';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  htmlstring: string;
  CSS: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.CSS = ' .bottom-padding-zero-scrollcontent .scroll-content { \r\n      padding-bottom: 0!important; \r\n    }\r\n    .justifycentergrid {\r\n      height: 100%;\r\n      justify-content: center;\r\n    }\r\n.bottom-padding-zero-scrollcontent .scroll-content { \r\n      padding-bottom: 0!important; \r\n    }\r\n    .justifycentergrid {\r\n      height: 100%;\r\n      justify-content: center;\r\n    } ';
    this.htmlstring = ' <ion-content no-bounce text-center [ngClass]=\"{\'align-vertical\': alignvertical, \'bottom-padding-zero-scrollcontent\': bottomzeropadding}\">\r\n  <ion-grid [ngClass]=\"{\'justifycentergrid\': vertaligngrid}\">\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <div class=\"wrapper\">\r\n          <div style=\"height: 50px; width: 100%; background-color: grey;\"><\/div>\r\n        <\/div>\r\n        <component-login><\/component-login>\r\n      <\/ion-col>\r\n    <\/ion-row>\r\n  <\/ion-grid>\r\n<\/ion-content> ';
  }

  presentLogin(){
    const loginModal: Modal = this.modalCtrl.create(LoginPage, {alignvertical: true, bottomzeropadding: false, vertaligngrid: false});
    loginModal.present();
  }

  presentLoginWithoutVerticalAlign(){
    const loginModal: Modal = this.modalCtrl.create(LoginPage, {alignvertical: false, bottomzeropadding: false, vertaligngrid: false});
    loginModal.present();
  }

  presentVertCenter1(){
    const loginModal: Modal = this.modalCtrl.create(LoginPage, {alignvertical: true, bottomzeropadding: true, vertaligngrid: false});
    loginModal.present();
  }

  presentVertCenter2(){
    const loginModal: Modal = this.modalCtrl.create(LoginPage, {alignvertical: false, bottomzeropadding: true, vertaligngrid: false});
    loginModal.present();
  }

  presentVertCenter3(){
    const loginModal: Modal = this.modalCtrl.create(LoginPage, {alignvertical: true, bottomzeropadding: true, vertaligngrid: true});
    loginModal.present();
  }

  presentVertCenter4(){
    const loginModal: Modal = this.modalCtrl.create(LoginPage, {alignvertical: false, bottomzeropadding: true, vertaligngrid: true});
    loginModal.present();
  }

  // presentVertCenter2(){
  //   const loginModal: Modal = this.modalCtrl.create(VertCenterPage, {alignvertical: true});
  //   loginModal.present();
  // }


}
