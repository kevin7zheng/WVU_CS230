import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { GrouporderComponent } from './grouporder/grouporder.component';
import { NovelorderComponent } from './novelorder/novelorder.component';
import { RandomNovelComponent } from './random-novel/random-novel.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'novelorder', component: NovelorderComponent },
  { path: 'grouporder', component: GrouporderComponent },
  { path: 'randomnovel', component: RandomNovelComponent },
  { path: 'forum', component: ForumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
