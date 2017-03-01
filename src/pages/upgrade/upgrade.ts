import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser, Market } from 'ionic-native';

@Component({
  selector: 'page-upgrade',
  templateUrl: 'upgrade.html'
})
export class Upgrade {

  platformIMG
  platformURL
  platformTXT
  platformName

  constructor(public navCtrl: NavController, public platform: Platform) {

      if (this.platform.is('ios')) {
        this.platformIMG = 'ios';
        this.platformName = 'the App Store';
        this.platformURL = 'ios';
        this.platformTXT = '';
      }
      else if (this.platform.is('android')) {
        this.platformIMG = 'android';
        this.platformName = 'Google Play or the Amazon Appstore';
        this.platformURL = 'android';
        this.platformTXT = 'or the Amazon Appstore';
      }
      else if (this.platform.is('windows')) {
        this.platformIMG = 'windows';
        this.platformName = 'the Windows Store';
        this.platformURL = 'windows';
        this.platformTXT = '';
      }
      else {
        this.platformIMG = 'website';
        this.platformName = 'the App Store, Google Play, Amazon Appstore or Windows Store';
        this.platformURL = 'none';
        this.platformTXT = 'Available on iOS, Android, Amazon or Windows';
      }
  }

  ionViewDidLoad() {
    console.log('Upgrade Page Loaded');
  }

  url() {

     if (this.platform.is('ios')) {
        Market.open('id1168304142');
      }
      else if (this.platform.is('android')) {
        Market.open('com.carlrydings.craftingguideforminecraftpro');
      }
      else if (this.platform.is('windows')) {
        new InAppBrowser('https://www.microsoft.com/en-gb/store/p/crafting-coach/9nblggh20482', '_blank');
      }
      else if (this.platform.is('none')) {
        new InAppBrowser('http://www.carlrydings.com/downloads/', '_blank');
      }
      else {
        new InAppBrowser('http://www.carlrydings.com/downloads/', '_blank');
      }

    
  }

}
