import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-craft-details-mechanical',
  templateUrl: 'craft-details-mechanical.html'
})
export class CraftDetailsMechanical {

  items

  state: string = "craft";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.items = navParams.get('item');

  }
  ionViewDidLoad() {
    console.log('Craft Mechanical Details Page Loaded');
  }


}
