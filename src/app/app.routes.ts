import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( (m) => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sounds/:id',
    loadComponent: () => import('./sounds/sounds.page').then( m => m.SoundsPage)
  },
  {
    path: 'player/:id-category/:id-track',
    loadComponent: () => import('./player/player.page').then( m => m.PlayerPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  }

];
