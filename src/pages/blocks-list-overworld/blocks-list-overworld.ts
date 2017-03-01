import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { BlocksDetailsOverworld } from '../blocks-details-overworld/blocks-details-overworld';

@Component({
  selector: 'page-blocks-list-overworld',
  templateUrl: 'blocks-list-overworld.html'
})
export class BlocksListOverworld {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/blocks/overworld.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Blocks List Overworld Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(BlocksDetailsOverworld, {item: item});
  }

}
