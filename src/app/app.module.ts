import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MapPage} from "../pages/map/map";
import {EventListPage} from "../pages/event-list/event-list";
import { EventSqliteProvider} from "../providers/event-list/event-sqlite-provider";
import {TaskSqliteProvider} from "../providers/tasks/task-sqlite-provider";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    EventListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    EventListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},TaskSqliteProvider,EventSqliteProvider]
})
export class AppModule {}
