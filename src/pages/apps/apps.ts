import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html'
})
export class Apps {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('More Apps Page Loaded');
  }

  currency() {
    new InAppBrowser('http://carlrydings.com/downloads/#taptapcurrency', '_blank');
  }

  weather() {
    new InAppBrowser('http://carlrydings.com/downloads/#taptapweather', '_blank');
  }

  slgquiz() {
    new InAppBrowser('http://carlrydings.com/downloads/#slgquiz', '_blank');
  }

}
