import { Component } from '@angular/core';

import { Craft } from '../craft/craft';
import { Blocks } from '../blocks/blocks';
import { Upgrade } from '../upgrade/upgrade';
import { More } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Craft;
  tab2Root: any = Blocks;
  tab3Root: any = Upgrade;
  tab4Root: any = More;

  constructor() {

  }
}
