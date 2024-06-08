import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SoundCategories } from '../sound-categories';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuComponent implements OnInit {
  soundCategories: SoundCategories[] = []

  constructor(
    private router: Router,
    private db: DbService
  ) { }

  ngOnInit(): void {
    this.fetchCategoryDetails();
  }

  async fetchCategoryDetails() {
    const data = this.db.getSoundsData();
    this.soundCategories = data ?? [];
  }

  showCategoryDetails(sound: SoundCategories) {
    this.router.navigateByUrl('/sounds/' + sound.id)
    .then(() => {
      window.location.reload();
    });
  }

  clickToAboutPage() {
    this.router.navigate(['/about'])
    .then(() => {
      window.location.reload();
    });
  }

}
