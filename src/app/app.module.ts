import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MenuPage } from '../pages/menu/menu';
import { TrunkPage } from '../pages/trunk/trunk';
import { AirconditionerPage } from '../pages/airconditioner/airconditioner';
import { Light } from '../pages/light/light';
import { Sideviewmirror } from '../pages/sideviewmirror/sideviewmirror';
import { Lock } from '../pages/lock/lock';
import { Phone } from '../pages/phone/phone';
import { Seats } from '../pages/seats/seats';
import { Seat } from '../pages/seat/seat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenuPage,
    TrunkPage,
    AirconditionerPage,
    Light,
    Sideviewmirror,
    Lock,
    Phone,
    Seats,
    Seat
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenuPage,
    TrunkPage,
    AirconditionerPage,
    Light,
    Sideviewmirror,
    Lock,
    Phone,
    Seats,
    Seat
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
