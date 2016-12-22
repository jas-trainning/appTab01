/**
 * Created by Administrator on 2016/12/22.
 */
export const TaskSqlConfig={
  createTableSql:"CREATE TABLE IF NOT EXISTS tasks (taskId VARCHAR(50) primary key,taskName varchar(300)" +
  ",taskVideo varchar(300),taskIcon varchar(20),taskCurveId varchar(50))",
  insertSql:"insert into tasks values(?,?,?,?,?)",
  selectSql:"select taskId,taskName,taskVideo,taskIcon,taskCurveId from tasks"
}
