import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Door } from '../door/door';
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the Doors page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-doors',
  templateUrl: 'doors.html',
})
export class Doors {

  toast: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.makeToast('Chọn cửa kính để điều chỉnh.');
  }

  makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 1500,
        position: 'bottom'
      });
      this.toast.present();
  }

  openPage() {
    this.navCtrl.push(Door);
  }

  back() {
    this.navCtrl.setRoot(MenuPage);
  }
}
