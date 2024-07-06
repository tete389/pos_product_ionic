import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'pos',
    loadComponent: () => import('./pos/pos.page').then( m => m.PosPage)
  },  {
    path: 'menu-managment',
    loadComponent: () => import('./menu-managment/menu-managment.page').then( m => m.MenuManagmentPage)
  },
  {
    path: 'pos-take-away',
    loadComponent: () => import('./pos-take-away/pos-take-away.page').then( m => m.PosTakeAwayPage)
  },

];
