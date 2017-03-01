import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-craft-details-basic',
  templateUrl: 'craft-details-basic.html'
})
export class CraftDetailsBasic {

  items

  state: string = "craft";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.items = navParams.get('item');

  }
  
  ionViewDidLoad() {
    console.log('Craft Basic Details Page Loaded');
  }

}
