import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { MobsDetailsEnd } from '../mobs-details-end/mobs-details-end';

@Component({
  selector: 'page-mobs-list-end',
  templateUrl: 'mobs-list-end.html'
})
export class MobsListEnd {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/mobs/end.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Mobs End Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(MobsDetailsEnd, {item: item});
  }


}
