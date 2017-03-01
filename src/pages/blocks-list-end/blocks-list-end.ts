import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

/* Page Imports */

import { BlocksDetailsEnd } from '../blocks-details-end/blocks-details-end';

@Component({
  selector: 'page-blocks-list-end',
  templateUrl: 'blocks-list-end.html'
})
export class BlocksListEnd {

  items

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/data/blocks/end.json").subscribe (data => {

      this.items = JSON.parse(data['_body']).results;
    }, error => {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('Blocks List End Page Loaded');
  }

  itemClicked(event, item) {
    this.navCtrl.push(BlocksDetailsEnd, {item: item});
  }

}
