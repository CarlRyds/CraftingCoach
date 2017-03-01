import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { CraftDetailsWeapons } from '../craft-details-weapons/craft-details-weapons';

@Component({
  selector: 'page-craft-list-weapons',
  templateUrl: 'craft-list-weapons.html'
})
export class CraftListWeapons {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/craft/weapons.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Craft List Weapons Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(CraftDetailsWeapons, {item: item});
  }

}
