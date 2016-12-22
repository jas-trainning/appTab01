var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { SQLite } from "ionic-native";
import { MySqliteDbConfig } from "../my-sqliteDb-config";
import { TaskSqlConfig } from "./task-sql-config";
export var TaskSqliteProvider = (function () {
    function TaskSqliteProvider() {
        this.init();
    }
    TaskSqliteProvider.prototype.init = function () {
        SQLite.openDatabase({ name: MySqliteDbConfig.name, location: MySqliteDbConfig.location }).then(function (db) {
            db.executeSql("create table aa(name varchar(50))", []).then(function () {
            }).catch(function (error) {
                console.error("创建表失败！" + error);
            });
        }, function (err) {
            console.error("无法打开数据库！" + err);
        });
        // SQLite.openDatabase({name:MySqliteDbConfig.name,location:MySqliteDbConfig.location}).then((db:: SQLite)=>{
        //   db.executeSql(TaskSqlConfig.createTableSql, []).then((flag) => {
        //     console.info("创建任务表成功")
        //   }, (error) => {
        //     console.error("创建任务表失败！" + error)
        //   });
        // },(err)=>{
        //   console.error("打开数据库失败！" + err)
        // });
    };
    TaskSqliteProvider.prototype.insertTask = function (taskModel) {
        return new Promise(function (succ, fail) {
            SQLite.openDatabase({ name: MySqliteDbConfig.name, location: MySqliteDbConfig.location }).then(function (db) {
                var jsonDataRow = [taskModel.taskId, taskModel.taskName, taskModel.taskVideo, taskModel.taskIcon, taskModel.taskCurveId];
                db.executeSql(TaskSqlConfig.insertSql, jsonDataRow).then(function (data) {
                    succ(data);
                }, function (error) {
                    fail("数据插入失败!" + error);
                    console.log("数据插入失败" + error);
                });
            }, function (error) {
                fail("打开数据库失败!" + error);
                console.log("打开数据库失败" + error);
            });
        });
    };
    TaskSqliteProvider.prototype.queryTasks = function () {
        return new Promise(function (succ, fail) {
            var datas = [];
            SQLite.openDatabase({ name: MySqliteDbConfig.name, location: MySqliteDbConfig.location }).then(function (db) {
                db.executeSql(TaskSqlConfig.selectSql, []).then(function (data) {
                    if (data.length > 0) {
                        for (var i = 0; i < data.length; i++) {
                            datas.push(data.rows.item(i));
                        }
                        fail(datas);
                    }
                }, function (error) {
                    fail("数据查询失败！" + error);
                });
            }, function (error) {
                fail("打开数据库失败！" + error);
            }).catch(function (error) {
                fail("执行异常了---" + error);
            });
        });
    };
    TaskSqliteProvider = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], TaskSqliteProvider);
    return TaskSqliteProvider;
}());
//# sourceMappingURL=task-sqlite-provider.js.map