import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //usuario obtenido
  user:any;

  constructor(public navCtrl: NavController, public navParams:NavParams) {

        this.user = navParams.data;
  }

}
