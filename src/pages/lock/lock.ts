import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the Lock page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lock',
  templateUrl: 'lock.html',
})
export class Lock {

  toast: any;
  imgSrcs: string[] = [
    "assets/icon/unlocked.png",
    "assets/icon/locked.png"
  ];
  imgSrc: string = this.imgSrcs[0];
  isLock: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
     this.makeToast('Xe đang mở khóa. Không có người trên xe. Bạn có muốn khóa xe không?');
  }

  makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 1500,
        position: 'top'
      });
      this.toast.present();
  }

  lock() {
    this.imgSrc = this.imgSrcs[1];
    this.makeToast('Xe đã được khóa');
    this.isLock = true;
  }

  unlock() {
    this.imgSrc = this.imgSrcs[0];
    this.makeToast('Xe đã mở khóa');
    this.isLock = false;
  }

  back() {
    this.navCtrl.setRoot(MenuPage);
  }
}
