import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { CraftDetailsFood } from '../craft-details-food/craft-details-food';

@Component({
  selector: 'page-craft-list-food',
  templateUrl: 'craft-list-food.html'
})
export class CraftListFood {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/craft/food.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Craft List Food Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(CraftDetailsFood, {item: item});
  }

}
