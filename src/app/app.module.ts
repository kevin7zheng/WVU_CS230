import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainBodyComponent } from './body/main-body.component';
import { BotNavBarComponent } from './Footer/bot-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutComponent } from './Layout/Layout.component';
import { PageComponent } from './pagination/page.component';
import { SideNavBarComponent } from './sidebar/side-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { NoveltagComponent } from './noveltag/noveltag.component';
import { NovelorderComponent } from './novelorder/novelorder.component';
import { SeriesFinderComponent } from './sidebar/series-finder/series-finder.component';
import { SeriesListingComponent } from './sidebar/series-listing/series-listing.component';
import { EstrangeComponent } from './novel/estrange/estrange.component';
import { SideNavBar2Component } from './sidebar/side-nav-bar2/side-nav-bar2.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { BodyListComponent } from './body/body-list.component';
import { BodyList2Component } from './body/body-list.component2';
import { NovelsComponent } from './Layout/Novels.component';
import { EditUserInfoComponent } from './body/Login/edit-user-info.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent, BotNavBarComponent, SideNavBarComponent,
    PageComponent,MainBodyComponent,LayoutComponent,
    NoveltagComponent, NovelorderComponent,
    SeriesFinderComponent,
    SeriesListingComponent,
    EstrangeComponent,
    SideNavBar2Component,
    UserInfoComponent,
    BodyListComponent,
    BodyList2Component,
    NovelsComponent,
    EditUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Novelupdates-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
