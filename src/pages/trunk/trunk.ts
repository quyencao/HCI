import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the Trunk page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trunk',
  templateUrl: 'trunk.html',
})
export class TrunkPage {

  toast: any;
  imgSrcs: string[] = [
    "assets/icon/trunk3.png",
    "assets/icon/trunk-2o.png"
  ];
  imgSrc: string = this.imgSrcs[0];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.makeToast('Mở cốp bằng chân đang khóa');
  }

  notify(event) {
    if(event.value) {
      this.imgSrc = this.imgSrcs[1];
      this.makeToast('Mở cốp bằng chân đã được kích hoạt');
    } else {
      this.imgSrc = this.imgSrcs[0];
      this.makeToast('Mở cốp bằng chân đang khóa');
    }
  }

  makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 900,
        position: 'bottom'
      });
      this.toast.present();
  }
}
