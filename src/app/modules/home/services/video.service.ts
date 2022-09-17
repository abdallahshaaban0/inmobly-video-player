import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private myChannel = environment.channelId;
  private playListId = environment.playlistId;
  private API_URL = environment.youtubeApi;
  private API_KEY = environment.apiKey;

  
  constructor(private http: HttpClient) { }

  search(param: any): Observable<any> {
    let searchApiParam: any = {
      q: param.query,
      key: this.API_KEY,
      part: 'snippet',
      channelId: this.myChannel,
      topicId: this.playListId,
      type: 'video',
      maxResults: 8,
      order: param.order ? param.order : 'relevance',
      pageToken: param.pageToken ? param.pageToken : '',
      safeSearch: 'none'
    }

    var queryString = Object.keys(searchApiParam).map(key => key + '=' + searchApiParam[key]).join('&');
    const url = `${this.API_URL}search?${queryString}`;

    return this.http.get(url);
  }

  getVideo(id: any) {
    const url = `${this.API_URL}videos?key=${this.API_KEY}&part=snippet,contentDetails,statistics&
                 channelId=${this.myChannel}&type=video&maxResults=8&id=${id}`;

    return this.http.get(url)
  }


  // getVideoDetails(id: any): any {
  //   return combineLatest([this.getVideo(id), this.getVideoRating(id)]).pipe(
  //     map((res) => {
  //       console.log(res);
  //       debugger;
  //     })
  //   )
  // }



  // getVideoRating(id: number) {
  //   return this.http.get(`${this.API_URL}videos/getRating?id=${id}`)
  // }
}
