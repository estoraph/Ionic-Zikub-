import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {YoutubePipe} from '..//pipes/youtube/youtube'
import {PipesModule} from '../pipes/pipes.module'
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlayListPageModule } from "../pages/play-list/play-list.module";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { SettingsPage } from "../pages/settings/settings";
import { SignupPage } from "../pages/signup/signup";
import { ResetPasswordPage } from "../pages/reset-password/reset-password";
import { TermsAndConditionsPage } from "../pages/terms-and-conditions/terms-and-conditions";
import { Facebook } from "@ionic-native/facebook";
import { GooglePlus } from "@ionic-native/google-plus";
import { TwitterConnect } from "@ionic-native/twitter-connect";
import { MyMenuComponent} from "../components/my-menu/my-menu";
import { HelpPage } from "../pages/help/help";
import { ProfilePage } from "../pages/profile/profile";
import { DataBaseServiceProvider } from '../providers/data-base-service/data-base-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingsPage,
    SignupPage,
    ResetPasswordPage,
    TermsAndConditionsPage,
    YoutubePipe,

    //PlayListPage,
    MyMenuComponent,
    HelpPage,
    ProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PlayListPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    //MyApp,
    TabsPage,
    HomePage,
    AboutPage,
    SettingsPage,
    SignupPage,
    ResetPasswordPage, 
    TermsAndConditionsPage,
    //PlayListPage,
    HelpPage,
    ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Facebook,
    GooglePlus,
    TwitterConnect,
    DataBaseServiceProvider,
  ]
})
export class AppModule {}
