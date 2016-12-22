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
import { EventSqliteProvider } from "../../providers/event-list/event-sqlite-provider";
import { SQLiteConfig } from "../../providers/sqlite-config";
/*
  Generated class for the EventList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var EventListPage = (function () {
    function EventListPage(navController, dbProvider, alertCtl) {
        var _this = this;
        this.navController = navController;
        this.dbProvider = dbProvider;
        this.alertCtl = alertCtl;
        this.people = new Array();
        this.people.push({ name: "fdfdf" });
        this.dbProvider.db.openDatabase(SQLiteConfig).then(function () {
            _this.dbProvider.db.executeSql("insert into danceMoves values('111')", []);
        });
    }
    EventListPage.prototype.query = function () {
        var _this = this;
        this.dbProvider.db.openDatabase(SQLiteConfig).then(function () {
            _this.dbProvider.db.executeSql("insert into danceMoves(name) values('woshiyigebing')", []).then(function (tt) {
                _this.dbProvider.db.executeSql("select * from  danceMoves", []).then(function (data) {
                    console.error(data);
                    _this.people.push({ name: data.rows.item(0).name });
                }, function (error2) {
                });
            }, function (erro1) {
            });
        });
    };
    EventListPage.prototype.query2 = function () {
        var _this = this;
        this.dbProvider.query().then(function (data) {
            _this.people.push(data);
            _this.alertCtl.create({
                title: "aler",
                message: data
            }).present();
        }, function (erro) {
            _this.alertCtl.create({
                title: "alerErro",
                message: erro
            }).present();
        });
    };
    EventListPage = __decorate([
        Component({
            templateUrl: 'event-list.html'
        }), 
        __metadata('design:paramtypes', [NavController, EventSqliteProvider, AlertController])
    ], EventListPage);
    return EventListPage;
}());
//# sourceMappingURL=event-list.js.map