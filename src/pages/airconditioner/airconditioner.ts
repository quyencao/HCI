import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the Airconditioner page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-airconditioner',
  templateUrl: 'airconditioner.html',
})
export class AirconditionerPage {
  toast: any;
  temp: number = 20;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Airconditioner');
  }

  makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 1500,
        position: 'top'
      });
      this.toast.present();
  }

  notify(event) {
    if(event.value) {
      this.makeToast('Chức năng điều khiển điều hòa đã được bật');
    } else {
       this.makeToast('Chức năng điều khiển điều hòa đã được tắt');
    }
  }

  back() {
    this.navCtrl.setRoot(MenuPage);
  }
}
