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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
