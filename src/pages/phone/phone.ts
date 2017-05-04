import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the Phone page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html',
})
export class Phone {

  toast: any;
  imgSrcs: string[] = [
    "assets/icon/volumeoff.png",
    "assets/icon/volumeon.png"
  ];
  imgSrc: string = this.imgSrcs[0];
  isLock: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.makeToast('Bạn đang trò chuyện bạn có muốn kết nối với loa không?');
  }

  makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 1500,
        position: 'bottom'
      });
      this.toast.present();
  }

  turnon() {
    this.imgSrc = this.imgSrcs[1];
    this.makeToast('Nghe điện thoại thông qua thiết bị âm thanh đã bật');
    this.isLock = true;
  }

  turnoff() {
    this.imgSrc = this.imgSrcs[0];
    this.makeToast('Nghe điện thoại thông qua thiết bị âm thanh đã tắt');
    this.isLock = false;
  }
}
