import { Component,  ViewChild, OnInit, ElementRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Sound, SoundCategories } from '../sound-categories';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { DbService } from '../service/db.service';


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

  id_category: number = 1;
  id_track: number = 1;
  loadData: boolean = false;


  constructor(
    private router: Router, 
    private location: Location,
    private route: ActivatedRoute,
    private db: DbService
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.id_category = parseInt(this.route.snapshot.paramMap.get('id-category') || '1', 10);
    this.id_category = parseInt(this.route.snapshot.paramMap.get('id-track') || '1', 10);
    this.getData(this.id_category, this.id_track);
  }

  getData(id_category: number, id_track: number){
    const data = this.db.getSoundsData();
    const category = data.find((item: SoundCategories) => item.id == id_category);
    this.track = category.sounds.find((item: Sound) => item.id == id_track);
    this.loadData = true;
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
