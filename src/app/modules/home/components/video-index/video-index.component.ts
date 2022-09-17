import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoService } from '../../services/video.service';
import { IVideo } from '../../_models/video.interface';

@Component({
  selector: 'app-video-index',
  templateUrl: './video-index.component.html',
  styleUrls: ['./video-index.component.scss']
})
export class VideoIndexComponent implements OnInit, OnDestroy {
  videoList!: IVideo[];
  subscription!: Subscription;
  nextPageToken: string = '';
  prevPageToken: string = '';
  searchQueryparam: {} = {};
  // @Output() search: EventEmitter<string> = new EventEmitter<string>();
  constructor(private _youtubeService: VideoService) {
    this.searchVideoList({ query: '' });

  }

  ngOnInit(): void {
  }

  searchVideoList(evt: any) {
    this.searchQueryparam = {
      ...this.searchQueryparam,
      ...evt
    }
    this.subscription = this._youtubeService.search(this.searchQueryparam)
      .subscribe((list: { items: IVideo[], nextPageToken: string, prevPageToken: string }) => {
        this.nextPageToken = list.nextPageToken;
        this.prevPageToken = list.prevPageToken;
        this.videoList = list.items;
      })
  }

  ngOnDestroy() {// destroy subscription
    this.subscription.unsubscribe();
  }

}
