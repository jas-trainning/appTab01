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
    let db1=new SQLite();
    db1.openDatabase(MySqliteDbConfig).then(()=>{
      db1.executeSql(TaskSqlConfig.createTableSql,[])
        .then(()=>{
          console.info("创建表成功！")
      }).catch((error)=>{
        console.error("创建表失败！"+error)
      })
    },(err)=>{
      console.error("打开数据库失败！"+err)
    });
  }
  insertTask(insertSql): Promise<any> {
    return new Promise(function (succ, fail) {
      let db1=new SQLite();
      db1.openDatabase(MySqliteDbConfig).then(()=>{
        db1.executeSql(insertSql,[]).then((data)=>{
          succ(data);
        },(error)=>{
          fail("数据插入失败!"+error.toString())
        });
      },(error)=>{
        fail("打开数据库失败!"+error)
      });
    })
  }
  queryTasks():Promise<any>{
    return new Promise(function(succ,fail){
     let  datas:Array<TaskModel>=[];
     let db1=new SQLite();
      db1.openDatabase({name:MySqliteDbConfig.name,location:MySqliteDbConfig.location}).then(()=>{
        db1.executeSql(TaskSqlConfig.selectSql,[]).then((data)=>{
           if(data.rows.length>0){
             for(let i=0;i<data.rows.length;i++){
               let model=new TaskModel()
               model.taskId=data.rows.item(i).taskId;
               model.taskName=data.rows.item(i).taskName;
               model.taskIcon=data.rows.item(i).taskIcon;
               datas.push(model);
             }
             succ(datas);
           }else {
             succ(data.rows.length)
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
