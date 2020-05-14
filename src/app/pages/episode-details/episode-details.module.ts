<<<<<<< HEAD:src/app/pages/episode-details/episode-details.module.ts
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../services/api.service
>>>>>>> eea6d4c3621336851d05c94984c29c9c6af87a89:mobdev-ca2/src/app/pages/episode-details/episode-details.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeDetailsPageRoutingModule } from './episode-details-routing.module';

import { EpisodeDetailsPage } from './episode-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodeDetailsPageRoutingModule
  ],
  declarations: [EpisodeDetailsPage]
})
export class EpisodeDetailsPageModule {}
