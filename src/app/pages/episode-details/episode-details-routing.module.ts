<<<<<<< HEAD:src/app/pages/episode-details/episode-details-routing.module.ts
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../services/api.service
>>>>>>> eea6d4c3621336851d05c94984c29c9c6af87a89:mobdev-ca2/src/app/pages/episode-details/episode-details-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodeDetailsPage } from './episode-details.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeDetailsPageRoutingModule {}
