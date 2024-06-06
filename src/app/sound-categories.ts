export interface Sound {
  songTitle: string;
  songMp3: string;
  }
  
  export interface SoundCategories {
  id: number;
  title: string;
  image: string;
  sounds: Sound[];
  }
  