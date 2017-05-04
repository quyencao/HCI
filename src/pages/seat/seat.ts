import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Seats } from "../seats/seats";

/**
 * Generated class for the Seat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seat',
  templateUrl: 'seat.html',
})
export class Seat {

  step: number = 30;
  totalDegree: number = 0;
  toast: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Seat');
  }

  rotate(degree) {
    document.getElementById("seat").style.transform = "rotate(" + degree + "deg)";
  }

  rotateRight() {
     if(this.totalDegree > 30) {
      this.makeToast('Ghế quá nghiêng về phía sau');
      return;
    }
    this.totalDegree += this.step;
    this.rotate(this.totalDegree);
  }

  rotateLeft() {
    if(this.totalDegree < -30) {
      this.makeToast('Ghế quá nghiêng về phía trước');
      return;
    }
    this.totalDegree -= this.step;
    this.rotate(this.totalDegree);
  }

  makeToast(message) {
      this.toast = this.toastCtrl.create({
        message,
        duration: 1500,
        position: 'top'
      });
      this.toast.present();
  }

  back() {
    this.navCtrl.setRoot(Seats);
  }
}
