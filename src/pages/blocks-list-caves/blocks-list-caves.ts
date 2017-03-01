import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { BlocksDetailsCaves } from '../blocks-details-caves/blocks-details-caves';

@Component({
  selector: 'page-blocks-list-caves',
  templateUrl: 'blocks-list-caves.html'
})
export class BlocksListCaves {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/blocks/caves.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Blocks List Caves Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(BlocksDetailsCaves, {item: item});
  }

}
