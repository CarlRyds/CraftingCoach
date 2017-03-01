import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-craft-details-tools',
  templateUrl: 'craft-details-tools.html'
})
export class CraftDetailsTools {

  items

  state: string = "craft";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.items = navParams.get('item');

  }
  
  ionViewDidLoad() {
    console.log('Craft Tools Details Page Loaded');
  }

}
