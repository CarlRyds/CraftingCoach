import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/* Page imports */
import { CraftListBasic } from '../craft-list-basic/craft-list-basic';
import { CraftListTools } from '../craft-list-tools/craft-list-tools';
import { CraftListWeapons } from '../craft-list-weapons/craft-list-weapons';
import { CraftListArmour } from '../craft-list-armour/craft-list-armour';
import { CraftListFood } from '../craft-list-food/craft-list-food';
import { CraftListMechanical } from '../craft-list-mechanical/craft-list-mechanical';

import { Information } from '../information/information';

@Component({
  selector: 'page-craft',
  templateUrl: 'craft.html'
})
export class Craft {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage) {}

  ionViewDidLoad() {
    console.log('Craft Page Loaded');
  }

  more() {
    let modal = this.modalCtrl.create(Information);
    modal.present();
  }

  basic(event, item) {
    this.navCtrl.push(CraftListBasic, { item: item });
  }

  tools(event, item) {
    this.navCtrl.push(CraftListTools, { item: item });
  }
  
  weapons(event, item) {
    this.navCtrl.push(CraftListWeapons, { item: item });
  }

  armour(event, item) {
    this.navCtrl.push(CraftListArmour, { item: item });
  }

  food(event, item) {
    this.navCtrl.push(CraftListFood, { item: item });
  }

  mechanical(event, item) {
    this.navCtrl.push(CraftListMechanical, { item: item });
  }


}
