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
    path: 'sounds',
    loadComponent: () => import('./sounds/sounds.page').then( m => m.SoundsPage)
  },
  {
    path: 'player',
    loadComponent: () => import('./player/player.page').then( m => m.PlayerPage)
  }
];
