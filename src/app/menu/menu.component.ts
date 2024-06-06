import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SoundCategories } from '../sound-categories';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuComponent implements OnInit {
  url = "http://localhost:3000/sounds";
  soundCategories: SoundCategories[] = []

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchCategoryDetails();
  }

  async fetchCategoryDetails() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      this.soundCategories = data ?? [];
    } catch (error) {
      console.error('Error fetching sound categories:', error);
    }
  }

  showCategoryDetails(sound: SoundCategories) {
    this.router.navigate(['/sounds', { category: JSON.stringify(sound) }]);
  }

  clickToAboutPage() {
    this.router.navigate(['/about']);
  }

}
