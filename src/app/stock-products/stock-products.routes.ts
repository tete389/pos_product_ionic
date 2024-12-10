import { Routes } from '@angular/router';
import { StockProductsPage } from './stock-products.page';

export const stockProductsRoutes: Routes = [
  {
    path: '',
    component: StockProductsPage,
    children: [
      {
        path: '',
        redirectTo: 'stock-levels', // Redirect เส้นทางว่างไปที่ 'stock-levels'
        pathMatch: 'full', // ต้องระบุเพื่อป้องกันปัญหาการ redirect
      },
      {
        path: 'stock-levels',
        loadComponent: () =>
          import('./stock-levels/stock-levels.component').then((m) => m.StockLevelsComponent),
      },
      {
        path: 'stock-items',
        loadComponent: () =>
          import('./stock-items/stock-items.component').then((m) => m.StockItemsComponent),
      },
      {
        path: 'stock-history',
        loadComponent: () =>
          import('./stock-history/stock-history.component').then((m) => m.StockHistoryComponent),
      },
      {
        path: 'stock-report',
        loadComponent: () =>
          import('./stock-report/stock-report.component').then((m) => m.StockReportComponent),
      },
    ],
  },
];
