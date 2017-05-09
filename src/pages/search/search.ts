import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../ViewModel/User';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  users = [
    new User(1, 'Cristian', 'assets/img/cristian.jpg', 'Soltero'),
    new User(13, 'Nathalia', 'assets/img/naty.jpg', 'Soltera'),
    new User(15, 'Mary Luz', 'assets/img/mary.jpg', 'En una Relación'),
    new User(20, 'Julieth', 'assets/img/julieth.jpg', 'En una Relación'),
  ];

  constructor(public navCtrl: NavController) {

  }

}
