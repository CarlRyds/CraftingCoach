import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-craft-details-food',
  templateUrl: 'craft-details-food.html'
})
export class CraftDetailsFood {

  items

  state: string = "craft";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.items = navParams.get('item');

  }
  ionViewDidLoad() {
    console.log('Craft Food Details Page Loaded');
  }

}
