import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SoundCategories } from '../sound-categories';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { DbService } from '../service/db.service';


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
    private db: DbService
  ) {}

  ngOnInit(): void {}

  ionViewWillEnter(){
    this.fetchCategoryDetails();

  }

  async fetchCategoryDetails() {
    const data = this.db.getSoundsData();
    this.soundCategories = data ?? [];
  }

  showCategoryDetails(category: SoundCategories) {
    this.router.navigateByUrl('/sounds/' + category.id);
  }
}
