import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-favirites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

    user: any;

    constructor(public navCtrl: NavController
        , private fb: Facebook
        , public navParams: NavParams
    ) {
        this.user = navParams.data;
    }

    searchFriends() {
        this.fb.api("me?fields=id,first_name,picture", ['public_profile'])
            .then((res: any) => {
            }
            );
    }

}
