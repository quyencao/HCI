import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Camera } from "../camera/camera";

/**
 * Generated class for the Cameras page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cameras',
  templateUrl: 'cameras.html',
})
export class Cameras {

  toast: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    document.getElementById("frontCamera").style.transform = "rotateY(180deg)";
    this.makeToast('Hãy chọn camera trước hoặc sau');
  }

  makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 1500,
        position: 'top'
      });
      this.toast.present();
  }

  openPage() {
    this.navCtrl.push(Camera);
  }

  back() {
    this.navCtrl.setRoot(MenuPage);
  }
}
