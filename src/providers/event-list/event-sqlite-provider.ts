import { Injectable } from '@angular/core';
import {SQLite} from "ionic-native";
import {SQLiteConfig} from "../sqlite-config";


@Injectable()
export class EventSqliteProvider {
   db:SQLite;
  constructor() {
    this.db=new SQLite();
    this.db.openDatabase(SQLiteConfig).then(() => {
      this.db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
        this.db.executeSql("insert into danceMoves valuse('hahahhahawoshiyigebing')",[])
        this.db.close()
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    }).then(()=>{
    });
  }
  query():Promise<any>{
    let innerDb:SQLite=new SQLite();
    return new Promise(function(resolve,reject){
        innerDb.openDatabase(SQLiteConfig).then(()=>{
        innerDb.executeSql("select * from danceMoves",[]).then((data)=>{
          resolve(data.rows.item(0) as JSON)
          innerDb.close();
        },(error)=>{
          console.error('Error  database', error);
          reject("---"+error);
        })
      },(err)=>{
          reject("不能打开数据库！"+err);
        })
    })
    };
}
