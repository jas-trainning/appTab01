import { Component } from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {Contact, Contacts, ContactName, ContactField} from "ionic-native";
import {TaskSqliteProvider} from "../../providers/tasks/task-sqlite-provider";
import {TaskModel} from "../../providers/tasks/task-model";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 contact:Contact;
 dataSet:Array<TaskModel>;
  constructor(public navCtrl: NavController,public alertCtl:AlertController,public taskProvider:TaskSqliteProvider) {
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

query(){
    // this.alertCtl.create({
    //     title:"11111",
    //     subTitle:"hahah",
    //     message:"进来了--"
    // }).present();
    this.taskProvider.queryTasks().then((data)=>{
        this.dataSet=data;
        this.alertCtl.create({
            title:"hello",
            subTitle:"hahah",
            message:"zhengchang--"+data
        }).present()
    },(error)=>{
        this.alertCtl.create({
            title:"错误",
            subTitle:"数据存取！",
            message:"异步获取数据失败-"+error
        }).present()
    });
}
}
