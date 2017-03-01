import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { CraftDetailsBasic } from '../craft-details-basic/craft-details-basic';

@Component({
  selector: 'page-craft-list-basic',
  templateUrl: 'craft-list-basic.html'
})
export class CraftListBasic {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/craft/basic.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Craft List Basic Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(CraftDetailsBasic, {item: item});
  }

}
