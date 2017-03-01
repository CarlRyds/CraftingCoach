import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mobs-details-nether',
  templateUrl: 'mobs-details-nether.html'
})
export class MobsDetailsNether {

  items

  state: string = "craft";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.items = navParams.get('item');

  }
  ionViewDidLoad() {
    console.log('Mobs Nether Details Page Loaded');
  }

}
