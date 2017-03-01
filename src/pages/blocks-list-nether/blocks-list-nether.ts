import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { BlocksDetailsNether } from '../blocks-details-nether/blocks-details-nether';

@Component({
  selector: 'page-blocks-list-nether',
  templateUrl: 'blocks-list-nether.html'
})
export class BlocksListNether {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/blocks/nether.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Blocks List Nether Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(BlocksDetailsNether, {item: item});
  }
}
