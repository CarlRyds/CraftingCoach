import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mobs-details-end',
  templateUrl: 'mobs-details-end.html'
})
export class MobsDetailsEnd {

  items

  state: string = "craft";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.items = navParams.get('item');

  }
  ionViewDidLoad() {
    console.log('Mobs End Details Page Loaded');
  }

}
