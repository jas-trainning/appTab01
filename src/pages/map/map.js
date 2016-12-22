var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController } from "ionic-angular";
export var MapPage = (function () {
    function MapPage(navCtl) {
        this.navCtl = navCtl;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        this.map = new BMap.Map(this.mapElement.nativeElement); // 创建地图实例
        this.map = new BMap.Map(this.mapElement.nativeElement, { minZoom: 4, maxZoom: 25 }); // 创建地图实例
        // var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
        //this.map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
        this.map.centerAndZoom("北京", 15);
        this.map.addControl(new BMap.NavigationControl());
        this.map.addControl(new BMap.ScaleControl());
        this.map.addControl(new BMap.OverviewMapControl());
        this.map.addControl(new BMap.MapTypeControl());
        //创建小狐狸
        var pt = new BMap.Point(116.404, 39.915);
        var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300, 157));
        var marker2 = new BMap.Marker(pt, { icon: myIcon }); // 创建标注
        this.map.enableScrollWheelZoom(); //开启鼠标滚轮缩放
        this.map.addOverlay(marker2); // 将标注添加到地图中
    };
    MapPage.prototype.locations = function () {
    };
    __decorate([
        ViewChild("container"), 
        __metadata('design:type', ElementRef)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Component({
            templateUrl: "map.html"
        }), 
        __metadata('design:paramtypes', [NavController])
    ], MapPage);
    return MapPage;
}());
//# sourceMappingURL=map.js.map