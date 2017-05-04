import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the Sideviewmirror page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sideviewmirror',
  templateUrl: 'sideviewmirror.html',
})
export class Sideviewmirror {

  toast: any;
  imgSrcs: string[] = [
    "assets/icon/front-car1.png",
    "assets/icon/front-car2.png"
  ];
  imgSrc: string = this.imgSrcs[0];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sideviewmirror');
  }

   makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 1000,
        position: 'bottom'
      });
      this.toast.present();
  }

  notify(event) {
    if(event.value) {
      this.makeToast('Gương chiếu hậu đã được mở');
      this.imgSrc = this.imgSrcs[1];
    } else {
       this.makeToast('Gương chiếu hậu đã được đóng');
       this.imgSrc = this.imgSrcs[0];
    }
  }

  back() {
    this.navCtrl.setRoot(MenuPage);
  }
}
