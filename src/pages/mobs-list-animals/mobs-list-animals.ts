import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { MobsDetailsAnimals } from '../mobs-details-animals/mobs-details-animals';

@Component({
  selector: 'page-mobs-list-animals',
  templateUrl: 'mobs-list-animals.html'
})
export class MobsListAnimals {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/mobs/animals.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Mobs Animals Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(MobsDetailsAnimals, {item: item});
  }

}
