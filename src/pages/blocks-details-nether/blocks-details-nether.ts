import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-blocks-details-nether',
  templateUrl: 'blocks-details-nether.html'
})
export class BlocksDetailsNether {

  items

  state: string = "craft";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.items = navParams.get('item');

  }
  ionViewDidLoad() {
    console.log('Blocks Nether Details Page Loaded');
  }

}
