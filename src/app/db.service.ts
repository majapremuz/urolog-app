import { Injectable } from '@angular/core';
import { SoundCategories } from './sound-categories';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  protected soundCategories: SoundCategories[] = [
  {
      "id": 1,
      "title": "Toilet - WC",
      "image": "assets/toilet-removebg-preview.png",
      "sounds": [
          {
          "songTitle": "toilet-song1",
          "songMp3": "toilet-song2.mp3"
          },
          {
          "songTitle": "toilet-song2",
          "songMp3": "toilet-song2.mp3"
          },
          {
          "songTitle": "toilet-song3",
          "songMp3": "toilet-song2.mp3"
          },
          {
          "songTitle": "toilet-song4",
          "songMp3": "toilet-song2.mp3"
          }
    ]
    },
   {
      "id": 2,
      "title": "Tap",
      "image": "assets/tap.png",
      "sounds": [
        {
          "songTitle": "tap-song1",
          "songMp3": "tap-song1.mp3"
          },
          {
          "songTitle": "tap-song2",
          "songMp3": "tap-song2.mp3"
          },
          {
          "songTitle": "tap-song3",
          "songMp3": "tap-song3.mp3"
          },
          {
          "songTitle": "tap-song4",
          "songMp3": "tap-song4.mp3"
          }
    ]
    },
    {
      "id": 3,
      "title": "Rain",
      "image": "assets/noun-umbrella-2-removebg-preview.png",
      "sounds": [
          {
          "songTitle": "rain-song1",
          "songMp3": "rain-song1.mp3"
          },
          {
          "songTitle": "rain-song2",
          "songMp3": "rain-song2.mp3"
          },
          {
          "songTitle": "rain-song3",
          "songMp3": "rain-song3.mp3"
          },
          {
          "songTitle": "rain-song4",
          "songMp3": "rain-song4.mp3"
          }
    ]
    },
    {
      "id": 4,
      "title": "Stream",
      "image": "assets/noun-river-stream-2-removebg-preview.png",
      "sounds": [
          {
          "songTitle": "stream-song1",
          "songMp3": "stream-song1.mp3"
          },
          {
          "songTitle": "stream-song2",
          "songMp3": "stream-song2.mp3"
          },
          {
          "songTitle": "stream-song3",
          "songMp3": "stream-song3.mp3"
          },
          {
          "songTitle": "stream-song4",
          "songMp3": "stream-song4.mp3"
          }
    ]
    },
    {
      "id": 5,
      "title": "River",
      "image": "assets/noun-river-2-removebg-preview.png",
      "sounds": [
          {
          "songTitle": "river-song1",
          "songMp3": "river-song1.mp3"
          },
          {
          "songTitle": "river-song2",
          "songMp3": "river-song2.mp3"
          },
          {
          "songTitle": "river-song3",
          "songMp3": "river-song3.mp3"
          },
          {
          "songTitle": "river-song4",
          "songMp3": "river-song4.mp3"
          }
    ]
    },
    {
      "id": 6,
      "title": "Sea",
      "image": "assets/sea.png",
      "sounds": [
        {
        "songTitle": "sea-song1",
        "songMp3": "sea-song1.mp3"
        },
        {
        "songTitle": "sea-song2",
        "songMp3": "sea-song2.mp3"
        },
        {
        "songTitle": "sea-song3",
        "songMp3": "sea-song3.mp3"
        },
        {
        "songTitle": "sea-song4",
        "songMp3": "sea-song4.mp3"
        } 
      ]
    }
  ];
  constructor() { }

  public getSoundCategories(): SoundCategories[] {
    return this.soundCategories;
  }
}
