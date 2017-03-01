import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html'
})
export class Launch {

  slides = [
    {
      title: "Welcome to Crafting Coach!",
      description: "Crafting Coach shows you which resources you need and how to craft items in Minecraft. Including crafting guides for basic items, tools, weapons, armour, food and mechanical.",
      image: "assets/img/other/launch/img-1.png",
    },
    {
      title: "Crafting Guides",
      description: "All the crafting guides include a description of the item, the resources you need to craft it, how hard they are to get and how to arrange them in the crafting table",
      image: "assets/img/other/launch/img-2.png",
    },
    {
      title: "Additional Information",
      description: "All the crafting guides include additional information. Including the items durability, luminance, blast resistance, if its stackable, renewable, flammable and more",
      image: "assets/img/other/launch/img-3.png",
    }
  ];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.navCtrl = navCtrl;
  }
 
  dismiss() {
    this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('Loaded Launch Page');
  }

}