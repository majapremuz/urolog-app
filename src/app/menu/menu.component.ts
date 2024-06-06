import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SoundCategories } from '../sound-categories';
import { DbService } from '../db.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuComponent implements OnInit{
  soundCategories: SoundCategories[] = []

  constructor(
    private router: Router,
    private dbService: DbService,
  ) { }

    ngOnInit(): void {
      this.soundCategories = this.dbService.getSoundCategories();
    }

  showCategoryDetails(sound: SoundCategories) {
    this.router.navigate(['/sounds', { category: JSON.stringify(sound) }]);
  }

  clickToAboutPage() {
    this.router.navigate(['/about']);
  }

}
