import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {SQLite} from "ionic-native";
import {Platform} from "ionic-angular";

/*
  Generated class for the Sqlite provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SqliteService {
  public database: SQLite;
  public people: Array<Object>;

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      this.database = new SQLite();
      this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
        this.add();
        this.add();
        this.add();
        this.add();
        this.refresh();
      }, (error) => {
        console.log("ERROR: ", error);
      });
    });
  }
  public add() {
    this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
      console.log("INSERTED: " + JSON.stringify(data));
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }
  public refresh() {
    this.database.executeSql("SELECT * FROM people", []).then((data) => {
      this.people = [];
      if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
          this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
        }
      }

    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }
  public queryPepole():Promise<Array<Object>>{
    return new Promise(function(resolve){
      this.database.executeSql("SELECT * FROM people", []).then((data) => {
        this.people = [];
        if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
            this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
          }
        }
        resolve(this.people);
      }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
      });
    })
  }
}
