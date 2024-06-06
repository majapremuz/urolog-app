import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  sounds: Array<any> = [];

  constructor() { 
    this.initData();
  } 

  getSoundsData(): Array<any>{
    return this.sounds;
  }

  initData(): void{
    this.sounds = [
      {
          "id": 1,
          "title": "Toilet - WC",
          "image": "assets/toilet-removebg-preview.png",
          "sounds": [
              {
              "id": 1,
              "songTitle": "toilet-song1",
              "songMp3": "assets/sounds/toilet-song2.mp3"
              },
              {
              "id": 2,
              "songTitle": "toilet-song2",
              "songMp3": "assets/sounds/toilet-song2.mp3"
              },
              {
              "id": 3,
              "songTitle": "toilet-song3",
              "songMp3": "assets/sounds/toilet-song2.mp3"
              },
              {
              "id": 4,
              "songTitle": "toilet-song4",
              "songMp3": "assets/sounds/toilet-song2.mp3"
              }
        ]
        },
       {
          "id": 2,
          "title": "Tap",
          "image": "assets/tap.png",
          "sounds": [
            {
              "id": 1,
              "songTitle": "tap-song1",
              "songMp3": "assets/sounds/tap-song1.mp3"
              },
              {
              "id": 2,
              "songTitle": "tap-song2",
              "songMp3": "assets/sounds/tap-song2.mp3"
              },
              {
              "id": 3,
              "songTitle": "tap-song3",
              "songMp3": "assets/sounds/tap-song3.mp3"
              },
              {
              "id": 4,
              "songTitle": "tap-song4",
              "songMp3": "assets/sounds/tap-song4.mp3"
              }
        ]
        },
        {
          "id": 3,
          "title": "Rain",
          "image": "assets/noun-umbrella-2-removebg-preview.png",
          "sounds": [
              {
              "id": 1,
              "songTitle": "rain-song1",
              "songMp3": "assets/sounds/rain-song1.mp3"
              },
              {
              "id": 2,
              "songTitle": "rain-song2",
              "songMp3": "assets/sounds/rain-song2.mp3"
              },
              {
              "id": 3,
              "songTitle": "rain-song3",
              "songMp3": "assets/sounds/rain-song3.mp3"
              },
              {
              "id": 4,
              "songTitle": "rain-song4",
              "songMp3": "assets/sounds/rain-song4.mp3"
              }
        ]
        },
        {
          "id": 4,
          "title": "Stream",
          "image": "assets/noun-river-stream-2-removebg-preview.png",
          "sounds": [
              {
              "id": 1,
              "songTitle": "stream-song1",
              "songMp3": "assets/sounds/stream-song1.mp3"
              },
              {
              "id": 2,
              "songTitle": "stream-song2",
              "songMp3": "assets/sounds/stream-song2.mp3"
              },
              {
              "id": 3,
              "songTitle": "stream-song3",
              "songMp3": "assets/sounds/stream-song3.mp3"
              },
              {
              "id": 4,
              "songTitle": "stream-song4",
              "songMp3": "assets/sounds/stream-song4.mp3"
              }
        ]
        },
        {
          "id": 5,
          "title": "River",
          "image": "assets/noun-river-2-removebg-preview.png",
          "sounds": [
              {
              "id": 1,
              "songTitle": "river-song1",
              "songMp3": "assets/sounds/river-song1.mp3"
              },
              {
              "id": 2,
              "songTitle": "river-song2",
              "songMp3": "assets/sounds/river-song2.mp3"
              },
              {
              "id": 3,
              "songTitle": "river-song3",
              "songMp3": "assets/sounds/river-song3.mp3"
              },
              {
              "id": 4,
              "songTitle": "river-song4",
              "songMp3": "assets/sounds/river-song4.mp3"
              }
        ]
        },
        {
          "id": 6,
          "title": "Sea",
          "image": "assets/sea.png",
          "sounds": [
            {
            "id": 1,
            "songTitle": "sea-song1",
            "songMp3": "assets/sounds/sea-song1.mp3"
            },
            {
            "id": 2,
            "songTitle": "sea-song2",
            "songMp3": "assets/sounds/sea-song2.mp3"
            },
            {
            "id": 3,
            "songTitle": "sea-song3",
            "songMp3": "assets/sounds/sea-song3.mp3"
            },
            {
            "id": 4,
            "songTitle": "sea-song4",
            "songMp3": "assets/sounds/sea-song4.mp3"
            }
        ]
        }  
      ];
  }
}
