import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {EventListPage} from "../event-list/event-list";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController) {
  }
}
