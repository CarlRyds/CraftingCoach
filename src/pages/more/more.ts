import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

/* Page imports */
import { Mobs } from '../mobs/mobs';

import { MobsListHostile } from '../mobs-list-hostile/mobs-list-hostile';
import { MobsListNether } from '../mobs-list-nether/mobs-list-nether';
import { MobsListEnd } from '../mobs-list-end/mobs-list-end';

import { Information } from '../information/information';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class More {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Mobs Page Loaded');
  }

  more() {
    let modal = this.modalCtrl.create(Information);
    modal.present();
  }

  mobs(event, item) {
    this.navCtrl.push(Mobs, { item: item });
  }

  biomes(event, item) {
    this.navCtrl.push(MobsListHostile, { item: item });
  }

  commands(event, item) {
    this.navCtrl.push(MobsListNether, { item: item });
  }

  texture(event, item) {
    this.navCtrl.push(MobsListEnd, { item: item });
  }

}
