import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the Light page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-light',
  templateUrl: 'light.html',
})
export class Light {

  toast: any;
  time:string = "light";

  lightImgSrcs: string[] = [
    "assets/icon/lightoff.png",
    "assets/icon/lighton.png"
  ];

  light: string = this.lightImgSrcs[1];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.time = Math.random() < 0.5 ? "light" : "dark";
    
    if(this.time === "light") {
      this.selectLight();
    } else {
      this.selectDark();
    }
  }

   makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 1200,
        position: 'bottom'
      });
      this.toast.present();
   }

   selectLight() {
      this.makeToast("Trời sáng! Bạn cần tắt đèn pha");
      this.light = this.lightImgSrcs[1];
   }

   selectDark() {
     this.makeToast("Trời tối! Bạn cần bật đèn pha");
     this.light = this.lightImgSrcs[0];
   }
  
   turnon() {
      this.light = this.lightImgSrcs[1];
      this.makeToast("Đèn pha đã bật");
   }

   turnoff() {
      this.light = this.lightImgSrcs[0];
      this.makeToast("Đèn pha đã tắt");
   }

   back() {
    this.navCtrl.setRoot(MenuPage);
  }
}
