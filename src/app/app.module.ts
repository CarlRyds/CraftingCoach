import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Storage } from '@ionic/storage';
import { RateService } from '../providers/rate-service/rate-service';

import { Craft } from '../pages/craft/craft';

import { CraftListBasic } from '../pages/craft-list-basic/craft-list-basic';
import { CraftListTools } from '../pages/craft-list-tools/craft-list-tools';
import { CraftListWeapons } from '../pages/craft-list-weapons/craft-list-weapons';
import { CraftListArmour } from '../pages/craft-list-armour/craft-list-armour';
import { CraftListFood } from '../pages/craft-list-food/craft-list-food';
import { CraftListMechanical } from '../pages/craft-list-mechanical/craft-list-mechanical';
import { CraftDetailsBasic } from '../pages/craft-details-basic/craft-details-basic';
import { CraftDetailsTools } from '../pages/craft-details-tools/craft-details-tools';
import { CraftDetailsWeapons } from '../pages/craft-details-weapons/craft-details-weapons';
import { CraftDetailsArmour } from '../pages/craft-details-armour/craft-details-armour';
import { CraftDetailsFood } from '../pages/craft-details-food/craft-details-food';
import { CraftDetailsMechanical } from '../pages/craft-details-mechanical/craft-details-mechanical';

import { Blocks } from '../pages/blocks/blocks';

import { BlocksListOverworld } from '../pages/blocks-list-overworld/blocks-list-overworld';
import { BlocksListCaves } from '../pages/blocks-list-caves/blocks-list-caves';
import { BlocksListOcean } from '../pages/blocks-list-ocean/blocks-list-ocean';
import { BlocksListNether } from '../pages/blocks-list-nether/blocks-list-nether';
import { BlocksListEnd } from '../pages/blocks-list-end/blocks-list-end';
import { BlocksDetailsOverworld } from '../pages/blocks-details-overworld/blocks-details-overworld';
import { BlocksDetailsCaves } from '../pages/blocks-details-caves/blocks-details-caves';
import { BlocksDetailsOcean } from '../pages/blocks-details-ocean/blocks-details-ocean';
import { BlocksDetailsNether } from '../pages/blocks-details-nether/blocks-details-nether';
import { BlocksDetailsEnd } from '../pages/blocks-details-end/blocks-details-end';

import { More } from '../pages/more/more';

import { Mobs } from '../pages/mobs/mobs';
import { MobsListAnimals } from '../pages/mobs-list-animals/mobs-list-animals';
import { MobsListHostile } from '../pages/mobs-list-hostile/mobs-list-hostile';
import { MobsListNether } from '../pages/mobs-list-nether/mobs-list-nether';
import { MobsListEnd } from '../pages/mobs-list-end/mobs-list-end';
import { MobsDetailsAnimals } from '../pages/mobs-details-animals/mobs-details-animals';
import { MobsDetailsHostile } from '../pages/mobs-details-hostile/mobs-details-hostile';
import { MobsDetailsNether } from '../pages/mobs-details-nether/mobs-details-nether';
import { MobsDetailsEnd } from '../pages/mobs-details-end/mobs-details-end';

import { Information } from '../pages/information/information';
import { Launch } from '../pages/launch/launch';
import { Upgrade } from '../pages/upgrade/upgrade';
import { Apps } from '../pages/apps/apps';

import { TabsPage } from '../pages/tabs/tabs';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '1f0f0b45'
  },
  'push': {
    'sender_id': '662031482505',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    Craft,
    CraftListBasic,
    CraftListTools,
    CraftListWeapons,
    CraftListArmour,
    CraftListFood,
    CraftListMechanical,
    CraftDetailsBasic,
    CraftDetailsTools,
    CraftDetailsWeapons,
    CraftDetailsArmour,
    CraftDetailsFood,
    CraftDetailsMechanical,
    Blocks,
    BlocksListOverworld,
    BlocksListCaves,
    BlocksListOcean,
    BlocksListNether,
    BlocksListEnd,
    BlocksDetailsOverworld,
    BlocksDetailsCaves,
    BlocksDetailsOcean,
    BlocksDetailsNether,
    BlocksDetailsEnd,
    More,
    Mobs,
    MobsListAnimals,
    MobsListHostile,
    MobsListNether,
    MobsListEnd,
    MobsDetailsAnimals,
    MobsDetailsHostile,
    MobsDetailsNether,
    MobsDetailsEnd,
    Information,
    Launch,
    Upgrade,
    Apps,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Craft,
    CraftListBasic,
    CraftListTools,
    CraftListWeapons,
    CraftListArmour,
    CraftListFood,
    CraftListMechanical,
    CraftDetailsBasic,
    CraftDetailsTools,
    CraftDetailsWeapons,
    CraftDetailsArmour,
    CraftDetailsFood,
    CraftDetailsMechanical,
    Blocks,
    BlocksListOverworld,
    BlocksListCaves,
    BlocksListOcean,
    BlocksListNether,
    BlocksListEnd,
    BlocksDetailsOverworld,
    BlocksDetailsCaves,
    BlocksDetailsOcean,
    BlocksDetailsNether,
    BlocksDetailsEnd,
    More,
    Mobs,
    MobsListAnimals,
    MobsListHostile,
    MobsListNether,
    MobsListEnd,
    MobsDetailsAnimals,
    MobsDetailsHostile,
    MobsDetailsNether,
    MobsDetailsEnd,
    Information,
    Launch,
    Upgrade,
    Apps,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, RateService]
})
export class AppModule {}
