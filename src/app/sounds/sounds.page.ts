import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SoundCategories, Sound } from '../sound-categories';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.page.html',
  styleUrls: ['./sounds.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FooterComponent, MenuComponent]
})
export class SoundsPage{

  id_category: number = 1;
  loadData: boolean = false;
  soundCategories!: SoundCategories;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private location: Location,
    private db: DbService
  ){}

  ionViewWillEnter(){
    this.id_category = parseInt(this.route.snapshot.paramMap.get('id') || '1', 10);
    this.getData(this.id_category);
  }


  getData(id: number){
    const data = this.db.getSoundsData();
    this.soundCategories = data.find(item => item.id == id);
    this.loadData = true;
  }

  clickToPlayer(track: Sound) {
    this.router.navigateByUrl('/player/' + this.id_category + "/" + track.id);
  }
}
