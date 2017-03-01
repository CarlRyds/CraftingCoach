import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { CraftDetailsArmour } from '../craft-details-armour/craft-details-armour';

@Component({
  selector: 'page-craft-list-armour',
  templateUrl: 'craft-list-armour.html'
})
export class CraftListArmour {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/craft/armour.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Craft List Armour Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(CraftDetailsArmour, {item: item});
  }

}
