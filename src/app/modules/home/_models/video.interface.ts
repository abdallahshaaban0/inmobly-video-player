export interface IVideo {
    id: {
        videoId: string;
    };
    snippet: {
        videoUrl: string;
        channelId: string;
        channelUrl: string;
        channelTitle: string;
        title: string;
        publishedAt: Date;
        description: string;
        thumbnails: {
            default: IThumbnail;
            high: IThumbnail;
            medium: IThumbnail
        };
    };
    statistics: {
        commentCount: number,
        favoriteCount: number,
        likeCount: number,
        viewCount: number
    };
    contentDetails: {
        duration: any
    }
}



interface IThumbnail {
    height: number;
    url: string;
    width: number;
}