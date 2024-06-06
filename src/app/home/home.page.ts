import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SoundCategories } from '../sound-categories';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { DbService } from '../db.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FooterComponent, MenuComponent]
})
export class HomePage implements OnInit{ 
  soundCategories: SoundCategories[] = [];

  constructor(
    private router: Router,
    private dbService: DbService
  ) {}

  
  ngOnInit(): void {
    this.soundCategories = this.dbService.getSoundCategories();
  }

  showCategoryDetails(category: SoundCategories) {
    this.router.navigate(['/sounds', { category: JSON.stringify(category) }]);
  }
}
