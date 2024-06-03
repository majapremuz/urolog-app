import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FooterComponent {

  constructor(
    private router: Router,
    private location: Location
  ) { }

  clickToHomePage() {
    this.router.navigate(["/home"]);
  }

  backButtonEvent() {
    this.location.back();
  }

}
