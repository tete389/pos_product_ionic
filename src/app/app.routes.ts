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
  },
  {
    path: 'menu-managment',
    loadComponent: () => import('./menu-managment/menu-managment.page').then( m => m.MenuManagmentPage)
  },
  {
    path: 'table-zone',
    loadComponent: () => import('./table-zone/table-zone.page').then( m => m.TableZonePage)
  },
  {
    path: 'best-sale-menu',
    loadComponent: () => import('./best-sale-menu/best-sale-menu.page').then( m => m.BestSaleMenuPage)
  },
  {
    path: 'discounts-taxe',
    loadComponent: () => import('./discounts-taxe/discounts-taxe.page').then( m => m.DiscountsTaxePage)
  },

];
