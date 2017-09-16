import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  Firebase  from 'firebase';

Firebase.initializeApp(
  {
    apiKey: "AIzaSyDdYYml8HLp2rwCr6yHcxBGP5VKIHGGdes",
    authDomain: "lifegram-d5187.firebaseapp.com",
    databaseURL: "https://lifegram-d5187.firebaseio.com",
    projectId: "lifegram-d5187",
    storageBucket: "lifegram-d5187.appspot.com",
    messagingSenderId: "1035514748552"
  }
)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
