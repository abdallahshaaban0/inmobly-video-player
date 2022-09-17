export const environment = {
  production: true,
  youtubeApi: 'https://www.googleapis.com/youtube/v3/', // 3rd part lib to integrate with google console for youtube data api
  channelId: 'UC0-Dvk2N-NrnTp7QpTgBzdQ',//youtube random channel id
  playlistId: 'PL4cxv5XJ0LKJAcrjK5j146l8HcMEYMV5q',//youtube random playlist id
  apiKey: 'AIzaSyD4djMjoUOAR62uhDlAKcNnlk7V61Fo_Tw', // apikey from google to authenticate the api from my local account google
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
