import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from './services/video.service';
import { VideoIndexComponent } from './components/video-index/video-index.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    VideoIndexComponent,
    VideoDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
    VideoService
  ]
})
export class HomeModule { }
