import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {EventListPage} from "../event-list/event-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage: any = EventListPage;
  pages:any=[EventListPage,HomePage]
  openPage(p){
    this.navCtrl.push(p);
  }
  constructor(public navCtrl: NavController) {
  }
}
