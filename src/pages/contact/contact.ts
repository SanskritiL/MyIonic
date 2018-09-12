import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

   brightness: 50;
  constructor(public navCtrl: NavController) {
   this.brightness= 50;
  }

}
