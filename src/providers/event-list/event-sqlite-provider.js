var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { SQLite } from "ionic-native";
import { SQLiteConfig } from "../sqlite-config";
export var EventSqliteProvider = (function () {
    function EventSqliteProvider() {
        var _this = this;
        this.db = new SQLite();
        this.db.openDatabase(SQLiteConfig).then(function () {
            _this.db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(function () {
                _this.db.executeSql("insert into danceMoves valuse('hahahhahawoshiyigebing')", []);
                _this.db.close();
            }, function (err) {
                console.error('Unable to execute sql: ', err);
            });
        }, function (err) {
            console.error('Unable to open database: ', err);
        }).then(function () {
        });
    }
    EventSqliteProvider.prototype.query = function () {
        var innerDb = new SQLite();
        return new Promise(function (resolve, reject) {
            innerDb.openDatabase(SQLiteConfig).then(function () {
                innerDb.executeSql("select * from danceMoves", []).then(function (data) {
                    resolve(data.rows.item(0));
                    innerDb.close();
                }, function (error) {
                    console.error('Error  database', error);
                    reject("---" + error);
                });
            }, function (err) {
                reject("不能打开数据库！" + err);
            });
        });
    };
    ;
    EventSqliteProvider = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], EventSqliteProvider);
    return EventSqliteProvider;
}());
//# sourceMappingURL=event-sqlite-provider.js.map