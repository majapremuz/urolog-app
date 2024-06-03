import { Component,  ViewChild, OnInit, ElementRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Sound } from '../sound-categories';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FooterComponent, MenuComponent]
})
export class PlayerPage implements OnInit {
  track!: Sound;
  @ViewChild('musicPlayer', { static: false }) musicPlayer!: ElementRef<HTMLAudioElement>;
  progress = 0;

  constructor(
    private router: Router, 
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.track = JSON.parse(params['sound']);
    });
  }

  ngOnInit() {
    const trackData = this.route.snapshot.paramMap.get('sound');
    if (trackData) {
      this.track = JSON.parse(trackData);
    }
  }

  play() {
    this.musicPlayer.nativeElement.play();
  }

  pause() {
    this.musicPlayer.nativeElement.pause();
  }

  stop() {
    this.musicPlayer.nativeElement.pause();
    this.musicPlayer.nativeElement.currentTime = 0;
    this.progress = 0;
  }

}
