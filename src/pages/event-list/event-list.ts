import { Component } from '@angular/core';
import {NavController,AlertController} from 'ionic-angular';
import {SQLite} from "ionic-native";
import {EventSqliteProvider} from "../../providers/event-list/event-sqlite-provider";
import {SQLiteConfig} from "../../providers/sqlite-config";

/*
  Generated class for the EventList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'event-list.html'
})
export class EventListPage {
  public database: SQLite;
  public people:any=new Array();
  constructor(private navController: NavController,public dbProvider:EventSqliteProvider,public alertCtl:AlertController) {
    this.people.push({name:"fdfdf"});
    this.dbProvider.db.openDatabase(SQLiteConfig).then(()=>{
      this.dbProvider.db.executeSql("insert into danceMoves values('111')",[]);
    })
  }
 query(){
    this.dbProvider.db.openDatabase(SQLiteConfig).then(()=>{
      this.dbProvider.db.executeSql("insert into danceMoves(name) values('woshiyigebing')",[]).then((tt)=>{
         this.dbProvider.db.executeSql("select * from  danceMoves",[]).then((data)=>{
           console.error(data);
          this.people.push({name:data.rows.item(0).name})

        },(error2)=>{

         })
      },(erro1)=>{

      })
    });

 }
  query2(){
    this.dbProvider.query().then((data)=>{
      this.people.push(data)
      this.alertCtl.create({
        title:"aler",
        message:data
      }).present()
    },(erro)=>{
      this.alertCtl.create({
        title:"alerErro",
        message:erro
      }).present()
    })
  }
}
