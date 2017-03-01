import { Component } from '@angular/core';
import { NavController, ViewController, AlertController, Platform } from 'ionic-angular';

import { InAppBrowser } from 'ionic-native';
import { Storage } from '@ionic/storage';

/* Providers */
import { RateService } from '../../providers/rate-service/rate-service';

/* Page imports */
import { Launch } from '../launch/launch';
import { Upgrade } from '../upgrade/upgrade';
import { Apps } from '../apps/apps';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
  providers: [RateService]
})
export class Information {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public storage: Storage, public alertCtrl: AlertController, public rateService: RateService, public platform: Platform) 
  {}

  ionViewDidLoad() {
    console.log('More Page Loaded');
  }

  privacy() {
    new InAppBrowser.open('http://carlrydings.com/privacy/', '_blank', 'location=no');
  }

  carl() {
    new InAppBrowser.open('http://carlrydings.com/', '_blank', 'location=no');
  }

  launch() {
    this.navCtrl.push(Launch);
  }
  
  upgrade() {
    this.navCtrl.push(Upgrade);
  }
  
  feedback() {
    new InAppBrowser.open('https://goo.gl/forms/GFUOCEHyBxkDieEW2', '_blank', 'location=no');
  }

  review() {
    this.rateService.promptForRating();
  }

  apps() {
    this.navCtrl.push(Apps);
  }

  alexa() {
    new InAppBrowser.open('http://amzn.to/2kzSWvy', '_blank', 'location=no');
  }

  clear() {
    this.storage.clear();

    let alert = this.alertCtrl.create({
    title: 'Clear Storage',
    subTitle: 'All your user defined data has been deleted',
    buttons: ['Dismiss']
    });

    alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}