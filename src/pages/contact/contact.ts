import {Component} from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {Contact, Contacts, ContactName, ContactField} from "ionic-native";
import {TaskSqliteProvider} from "../../providers/tasks/task-sqlite-provider";
import {TaskModel} from "../../providers/tasks/task-model";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    contact: Contact;
    dataSet: Array<TaskModel> = [];

    constructor(public navCtrl: NavController, public alertCtl: AlertController, public taskProvider: TaskSqliteProvider) {
        this.dataSet.push(new TaskModel());
        this.contact = Contacts.create();
        this.contact.name = new ContactName(null, 'Smith2', 'John2');
        this.contact.phoneNumbers = [new ContactField('mobile', '010-6471234567')];
        this.contact.save().then(
            () => {
                console.log('Contact saved!', this.contact);
                alertCtl.create({
                    title: "hello",
                    subTitle: "hahah"
                })
            }
        );
    }
   insert(){
      let insertSql="insert into tasks values('123','任务2','home','video1','curve1')"
       this.taskProvider.insertTask(insertSql).then(data=>{
           this.refresh();
       },error=>{
           console.error("保持失败！"+error);
       });
   }
    query() {
        this.taskProvider.queryTasks().then(data => {
            if (data) {
                this.dataSet=data;
            }
        }, error => {
            console.error(error);
        });
    }
    refresh(){
        this.taskProvider.queryTasks().then((data) => {
            if (data) {
                this.dataSet=data;
            }
        }, (error) => {
            console.error(error);
        });
    }
}
