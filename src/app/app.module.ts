import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotNavBarComponent } from './Footer/bot-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { PageComponent } from './pagination/page.component';
import { SideNavBarComponent } from './sidebar/side-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent, BotNavBarComponent, SideNavBarComponent,
    PageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
