import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { MobsDetailsNether } from '../mobs-details-nether/mobs-details-nether';

@Component({
  selector: 'page-mobs-list-nether',
  templateUrl: 'mobs-list-nether.html'
})
export class MobsListNether {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/mobs/nether.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Mobs Nether Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(MobsDetailsNether, {item: item});
  }


}
