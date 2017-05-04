import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cameras } from "../cameras/cameras";

/**
 * Generated class for the Camera page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class Camera {

  Y: number = 0;
  X: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
     document.getElementById("upImg").style.transform = "rotate(-90deg)";
     document.getElementById("downImg").style.transform = "rotate(90deg)";
  }

  back() {
    this.navCtrl.setRoot(Cameras);
  }

  up() {
    if(this.Y <= -21) {
      this.Y = 0;
    }
    this.Y -= 1;
    document.getElementById('image').style.transform = "translateY(" + this.Y + "px)";
  }

  down() {
    if(this.Y >= 21) {
      this.Y = 0;
    }
    this.Y += 1;
    document.getElementById('image').style.transform = "translateY(" + this.Y + "px)";
  }

  left() {
    if(this.X <= -28) {
      this.X = 0;
    }
    this.X -= 1;
    document.getElementById('image').style.transform = "translateX(" + this.X + "px)";
  }

  right() {
    if(this.X >= 28) {
      this.X = 0;
    }
    this.X += 1;
    document.getElementById('image').style.transform = "translateX(" + this.X + "px)";
  }
}
