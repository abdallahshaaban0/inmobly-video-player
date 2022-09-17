import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideoIndexComponent } from './components/video-index/video-index.component';

const routes: Routes = [
  {
    path: 'list',
    component: VideoIndexComponent
  },

  {
    path: 'video-details/:id',
    component: VideoDetailsComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
