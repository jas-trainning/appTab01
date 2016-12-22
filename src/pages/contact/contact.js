var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Contacts, ContactName, ContactField } from "ionic-native";
import { TaskSqliteProvider } from "../../providers/tasks/task-sqlite-provider";
export var ContactPage = (function () {
    function ContactPage(navCtrl, alertCtl, taskProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtl = alertCtl;
        this.taskProvider = taskProvider;
        this.contact = Contacts.create();
        this.contact.name = new ContactName(null, 'Smith2', 'John2');
        this.contact.phoneNumbers = [new ContactField('mobile', '010-6471234567')];
        this.contact.save().then(function () {
            console.log('Contact saved!', _this.contact);
            alertCtl.create({
                title: "hello",
                subTitle: "hahah"
            });
        });
    }
    ContactPage.prototype.query = function () {
        var _this = this;
        // this.alertCtl.create({
        //     title:"11111",
        //     subTitle:"hahah",
        //     message:"进来了--"
        // }).present();
        this.taskProvider.queryTasks().then(function (data) {
            _this.dataSet = data;
            _this.alertCtl.create({
                title: "hello",
                subTitle: "hahah",
                message: "zhengchang--" + data
            }).present();
        }, function (error) {
            _this.alertCtl.create({
                title: "错误",
                subTitle: "数据存取！",
                message: "异步获取数据失败-" + error
            }).present();
        });
    };
    ContactPage = __decorate([
        Component({
            selector: 'page-contact',
            templateUrl: 'contact.html'
        }), 
        __metadata('design:paramtypes', [NavController, AlertController, TaskSqliteProvider])
    ], ContactPage);
    return ContactPage;
}());
//# sourceMappingURL=contact.js.map