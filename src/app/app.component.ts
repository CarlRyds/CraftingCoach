import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Splashscreen } from 'ionic-native';
import { AdMob } from 'ionic-native';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { Launch } from '../pages/launch/launch';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = TabsPage;
  loader: any;

  constructor(platform: Platform, public loadingCtrl: LoadingController, public storage: Storage) {

    this.presentLoading();

    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      StatusBar.styleDefault();
      
      // INTRO ////////////
      
        this.storage.get('introShown').then((result) => {
 
        if(result){
          this.rootPage = TabsPage;
        } else {
          this.rootPage = Launch;
          this.storage.set('introShown', true);
        }
 
        this.loader.dismiss();
 
      });
      
      // ADMOB ////////////

       interface AdMobType {
         banner:string,
         interstitial:string
       };
 
       var admobid:AdMobType;
 
        // select the right Ad Id according to platform
        if( /(android)/i.test(navigator.userAgent) ) { 
            admobid = { // for Android
                banner: 'ca-app-pub-7859778016013223/8837890150',
                interstitial: 'ca-app-pub-7859778016013223/5744822957'
            };
        } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            admobid = { // for iOS
                banner: 'ca-app-pub-7859778016013223/2473298955',
                interstitial: 'ca-app-pub-7859778016013223/3950032152'
            };
        } else {
            admobid = { // for Windows Phone
                banner: 'ca-app-pub-7859778016013223/5426765353',
                interstitial: 'ca-app-pub-7859778016013223/6903498557'
            };
        }
 
        if(AdMob)  AdMob.createBanner( {
                         adId:admobid.banner,
                        isTesting:true,//comment this out before publishing the app
                        autoShow:true} );
 
    } /// END platform
    
    ); 

  } /// END constructor

    presentLoading() {
    
        this.loader = this.loadingCtrl.create({
        content: 'Loading...'
        });
    
        this.loader.present();
    }

} /// END export class