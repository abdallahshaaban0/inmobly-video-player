// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  youtubeApi: 'https://www.googleapis.com/youtube/v3/', // 3rd part lib to integrate with google console for youtube data api
  channelId: 'UCuaMJTqQ_W7qztqZ_zyErJg',//youtube random channel id
  playlistId: 'PL4cxv5XJ0LKLCNXfeaSpmSU1Vp4ChstW-',//youtube random playlist id
  apiKey: 'AIzaSyB3LqdAcKXKvD6BZ8VcCCdbD7vSPRCNJP8', // apikey from google to authenticate the api from my local account google
  cacheTimeInMinutes: 30,
  // firebase configuration start here..
  firebaseConfig: {
    apiKey: "AIzaSyD8f6wuAJKI0I4tBHtd-RDIOJekUY9Vg3s",
    authDomain: "inmobly-video-player.firebaseapp.com",
    projectId: "inmobly-video-player",
    storageBucket: "inmobly-video-player.appspot.com",
    messagingSenderId: "809028187891",
    appId: "1:809028187891:web:cae5ceb70fd0eaf9ae6986",
    measurementId: "G-QTL1767ZQ6"
  }
  // firebase configuration End here..
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
