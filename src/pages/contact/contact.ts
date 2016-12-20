import { Component } from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {Contact, Contacts, ContactName, ContactField} from "ionic-native";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 contact:Contact;
  constructor(public navCtrl: NavController,public alertCtl:AlertController) {
    this.contact = Contacts.create();
    this.contact.name = new ContactName(null, 'Smith2', 'John2');
    this.contact.phoneNumbers = [new ContactField('mobile', '010-6471234567')];
    this.contact.save().then(
      () =>{
        console.log('Contact saved!', this.contact);
        alertCtl.create({
          title:"hello",
          subTitle:"hahah"
        })
      }
      // ,(error: any) => console.error('Error saving contact.', error)
    );
  }

}
