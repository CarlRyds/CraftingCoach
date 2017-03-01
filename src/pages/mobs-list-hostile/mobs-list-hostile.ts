import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { MobsDetailsHostile } from '../mobs-details-hostile/mobs-details-hostile';

@Component({
  selector: 'page-mobs-list-hostile',
  templateUrl: 'mobs-list-hostile.html'
})
export class MobsListHostile {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/mobs/hostile.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Mobs Hostile Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(MobsDetailsHostile, {item: item});
  }

}
