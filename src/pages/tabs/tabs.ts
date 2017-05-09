import { Component,  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})

/**
 * Componte que admistra los tabs de la App
 */
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  homeTab: any = HomePage;
  searchTab: any = SearchPage;
  favoriteTab: any = FavoritesPage ;
  user:any;

  constructor(navParams: NavParams) {      
      this.user = navParams.get('user');
      
  }
}
