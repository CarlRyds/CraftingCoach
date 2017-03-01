import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

/* Page imports */
import { BlocksListOverworld } from '../blocks-list-overworld/blocks-list-overworld';
import { BlocksListCaves } from '../blocks-list-caves/blocks-list-caves';
import { BlocksListOcean } from '../blocks-list-ocean/blocks-list-ocean';
import { BlocksListNether } from '../blocks-list-nether/blocks-list-nether';
import { BlocksListEnd } from '../blocks-list-end/blocks-list-end';

import { Information } from '../information/information';

@Component({
  selector: 'page-blocks',
  templateUrl: 'blocks.html'
})
export class Blocks {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Blocks Page Loaded');
  }

  more() {
    let modal = this.modalCtrl.create(Information);
    modal.present();
  }

  overworld(event, item) {
    this.navCtrl.push(BlocksListOverworld, { item: item });
  }
  
  caves(event, item) {
    this.navCtrl.push(BlocksListCaves, { item: item });
  }

  ocean(event, item) {
    this.navCtrl.push(BlocksListOcean, { item: item });
  }
  
  nether(event, item) {
    this.navCtrl.push(BlocksListNether, { item: item });
  }

  end(event, item) {
    this.navCtrl.push(BlocksListEnd, { item: item });
  }

}
