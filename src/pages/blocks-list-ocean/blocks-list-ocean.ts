import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { BlocksDetailsOcean } from '../blocks-details-ocean/blocks-details-ocean';

@Component({
  selector: 'page-blocks-list-ocean',
  templateUrl: 'blocks-list-ocean.html'
})
export class BlocksListOcean {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/blocks/ocean.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Blocks List Ocean Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(BlocksDetailsOcean, {item: item});
  }
}
