import {Injectable} from "@angular/core";
import {SQLite} from "ionic-native";
import {MySqliteDbConfig} from "../my-sqliteDb-config";
import {TaskSqlConfig} from "./task-sql-config";
import {TaskModel} from "./task-model";

@Injectable()
export class TaskSqliteProvider {
  constructor() {
    this.init();
  }
  init() {
    SQLite.openDatabase({name:MySqliteDbConfig.name,location:MySqliteDbConfig.location}).then((db:SQLite)=>{

      db.executeSql("create table aa(name varchar(50))",[]).then(()=>{

      }).catch((error)=>{
        console.error("创建表失败！"+error)
      })
    },(err)=>{
      console.error("无法打开数据库！"+err)
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
  }
  insertTask(taskModel): Promise<any> {
    return new Promise(function (succ, fail) {

      SQLite.openDatabase({name:MySqliteDbConfig.name,location:MySqliteDbConfig.location}).then((db: SQLite)=>{
        let jsonDataRow=[taskModel.taskId,taskModel.taskName,taskModel.taskVideo,taskModel.taskIcon,taskModel.taskCurveId]
        db.executeSql(TaskSqlConfig.insertSql,jsonDataRow).then((data)=>{
          succ(data);
        },(error)=>{
          fail("数据插入失败!"+error)
          console.log("数据插入失败"+error);
        });
      },(error)=>{
        fail("打开数据库失败!"+error)
        console.log("打开数据库失败"+error);
      });
    })
  }
  queryTasks():Promise<any>{
    return new Promise(function(succ,fail){
     let  datas:Array<TaskModel>=[];
      SQLite.openDatabase({name:MySqliteDbConfig.name,location:MySqliteDbConfig.location}).then((db: SQLite)=>{
        db.executeSql(TaskSqlConfig.selectSql,[]).then((data)=>{
           if(data.length>0){
             for(let i=0;i<data.length;i++){
               datas.push(data.rows.item(i) as TaskModel);
             }
             fail(datas);
           }
         },(error)=>{
             fail("数据查询失败！"+error);
         });
       },(error)=>{
         fail("打开数据库失败！"+error);
      }).catch((error)=>{
        fail("执行异常了---"+error)
      })
    })
  }
}
