import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SoundCategories, Sound } from '../sound-categories';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.page.html',
  styleUrls: ['./sounds.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FooterComponent, MenuComponent]
})
export class SoundsPage{
  soundCategories!: SoundCategories;

  constructor(
    private router: Router, 
    private location: Location,
    private route: ActivatedRoute
  )
  
  {
    this.route.params.subscribe(params => {
      this.soundCategories = JSON.parse(params['category']);
    });
  }

  clickToPlayer(track: Sound) {
    this.router.navigate(['/player', { sound: JSON.stringify(track) }])
  }
}
