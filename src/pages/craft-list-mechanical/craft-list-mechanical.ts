import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { CraftDetailsMechanical } from '../craft-details-mechanical/craft-details-mechanical';

@Component({
  selector: 'page-craft-list-mechanical',
  templateUrl: 'craft-list-mechanical.html'
})
export class CraftListMechanical {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/craft/mechanical.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Craft List Mechanical Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(CraftDetailsMechanical, {item: item});
  }

}
