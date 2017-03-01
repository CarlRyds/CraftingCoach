import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { CraftDetailsTools } from '../craft-details-tools/craft-details-tools';

@Component({
  selector: 'page-craft-list-tools',
  templateUrl: 'craft-list-tools.html'
})
export class CraftListTools {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/craft/tools.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Craft List Tools Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(CraftDetailsTools, {item: item});
  }

}
