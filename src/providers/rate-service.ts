import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AppRate } from 'ionic-native';

@Injectable()
export class RateService {
  
  appRate: any = AppRate;
  
  constructor(public platform: Platform) {
    
    this.platform.ready().then(

      () => {
        this.appRate.preferences.storeAppURL = {
          ios: '849930087',
          android: 'market://details?id=com.carlrydings.craftingguideforminecraft',
          windows: 'ms-windows-store://pdp/?ProductId=9nblggh1z0w3',
        };

        this.appRate.preferences.usesUntilPrompt = 2;

        this.appRate.preferences.customLocale = {
          title: "Rate Crafting Coach",
          message: "If you enjoy using Crafting Coach, please rate and review it.",
          cancelButtonLabel: "No, Thanks",
          laterButtonLabel: "Remind Me Later",
          rateButtonLabel: "Rate It Now"
        };
        
      }      
    )
  }

}