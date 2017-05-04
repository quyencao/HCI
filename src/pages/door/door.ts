import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Doors } from "../doors/doors";

/**
 * Generated class for the Door page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-door',
  templateUrl: 'door.html',
})
export class Door {

  toast: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
     document.getElementById("up").style.transform = "rotate(-90deg)";
     document.getElementById("down").style.transform = "rotate(90deg)";
  }

  back() {
    this.navCtrl.setRoot(Doors);
  }

   makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 1500,
        position: 'top'
      });
      this.toast.present();
  }


  up() {
    this.makeToast('Cửa đang đóng');
  }

  down() {
    this.makeToast('Cửa đang mở');
  }

}
