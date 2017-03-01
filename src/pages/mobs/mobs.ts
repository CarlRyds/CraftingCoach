import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

/* Page imports */
import { MobsListAnimals } from '../mobs-list-animals/mobs-list-animals';
import { MobsListHostile } from '../mobs-list-hostile/mobs-list-hostile';
import { MobsListNether } from '../mobs-list-nether/mobs-list-nether';
import { MobsListEnd } from '../mobs-list-end/mobs-list-end';

@Component({
  selector: 'page-mobs',
  templateUrl: 'mobs.html'
})
export class Mobs {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Mobs Page Loaded');
  }

  animals(event, item) {
    this.navCtrl.push(MobsListAnimals, { item: item });
  }

  hostile(event, item) {
    this.navCtrl.push(MobsListHostile, { item: item });
  }

  nether(event, item) {
    this.navCtrl.push(MobsListNether, { item: item });
  }

  end(event, item) {
    this.navCtrl.push(MobsListEnd, { item: item });
  }

}
