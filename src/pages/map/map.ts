/**
 * Created by Administrator on 2016/12/17.
 */
import {Component, ViewChild, ElementRef} from "@angular/core";
import {NavController} from "ionic-angular";
declare var BMap;
@Component({
  templateUrl:"map.html"
})
export  class MapPage{
  @ViewChild("container")mapElement:ElementRef;
  container: any;
  map:any;
  constructor(public  navCtl:NavController){
  }
  ionViewDidLoad(){
    this.loadMap();
  }
  loadMap() {
    this.map = new BMap.Map(this.mapElement.nativeElement);          // 创建地图实例
    this.map = new BMap.Map(this.mapElement.nativeElement ,{minZoom:4,maxZoom:25});          // 创建地图实例

    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
    //this.map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    this.map.centerAndZoom("北京",15);
    this.map.addControl(new BMap.NavigationControl());
    this.map.addControl(new BMap.ScaleControl());
    this.map.addControl(new BMap.OverviewMapControl());
    this.map.addControl(new BMap.MapTypeControl());
    //创建小狐狸
    var pt = new BMap.Point(116.404, 39.915);
    var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300, 157));
    var marker2 = new BMap.Marker(pt, { icon: myIcon });  // 创建标注
    this.map.enableScrollWheelZoom();                     //开启鼠标滚轮缩放
    this.map.addOverlay(marker2);                         // 将标注添加到地图中

  }
  locations(){

  }
}
