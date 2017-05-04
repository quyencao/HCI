import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seats } from './seats';

@NgModule({
  declarations: [
    Seats,
  ],
  imports: [
    IonicPageModule.forChild(Seats),
  ],
  exports: [
    Seats
  ]
})
export class SeatsModule {}
