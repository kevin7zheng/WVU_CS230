import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrouporderComponent } from './grouporder/grouporder.component';
import { LayoutComponent } from './Layout/Layout.component';
import { EstrangeComponent } from './novel/estrange/estrange.component';
import { NovelorderComponent } from './novelorder/novelorder.component';
import { ForumComponent } from './sidebar/forum/forum.component';
import { RandomNovelComponent } from './sidebar/random-novel/random-novel.component';
import { ReadingListComponent } from './sidebar/reading-list/reading-list.component';
import { RecListsComponent } from './sidebar/rec-lists/rec-lists.component';
import { ReleaseFilteringComponent } from './sidebar/release-filtering/release-filtering.component';
import { SeriesFilteringComponent } from './sidebar/series-filtering/series-filtering.component';
import { SeriesFinderComponent } from './sidebar/series-finder/series-finder.component';
import { SeriesListingComponent } from './sidebar/series-listing/series-listing.component';
import { SeriesRankingComponent } from './sidebar/series-ranking/series-ranking.component';


const routes: Routes = [
  { path: 'home', component: LayoutComponent },
  { path: 'novelorder', component: NovelorderComponent },
  { path: 'grouporder', component: GrouporderComponent },
  { path: 'randomnovel', component: RandomNovelComponent},
  { path: 'forum', component: ForumComponent },
  { path: 'seriesfinder', component: SeriesFinderComponent},
  { path: 'serieslisting', component: SeriesListingComponent },
  { path: 'seriesranking', component: SeriesRankingComponent},
  { path: 'reclists', component: RecListsComponent },
  { path: 'readlist', component: ReadingListComponent },
  { path: 'releasefilter', component: ReleaseFilteringComponent},
  { path: 'seriesfilter', component: SeriesFilteringComponent },
  { path: 'estrange', component: EstrangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
