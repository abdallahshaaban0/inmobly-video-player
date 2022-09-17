import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoService } from '../../services/video.service';
import { IVideo } from '../../_models/video.interface';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  videoDetails!: IVideo;
  videoDuration!: {};
  subscription!: Subscription;
  constructor(private _videoService: VideoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.getID();
    this.getVideo(id);
  }

  getVideo(id: number) {
    this.subscription = this._videoService.getVideo(id).subscribe((details: any) => {
      this.videoDetails = details.items[0];
      this.calculateDuration();
    })
  }

  calculateDuration() {
    let duration = this.videoDetails.contentDetails.duration;
    this.videoDetails.contentDetails.duration = duration.slice(2, duration.length - 1).replace('H', ' : ').replace('M', ' : ');
  }

  getID() {
    return this._activatedRoute.snapshot.params['id'];
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
