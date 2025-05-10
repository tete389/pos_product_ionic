import { Routes } from '@angular/router';
import { SettingsPage } from './settings.page';

export const stockProductsRoutes: Routes = [
  {
    path: '',
    component: SettingsPage,
    children: [
      {
        path: 'restaurant-info',
        loadComponent: () => import('../settings/restaurant-info/restaurant-info.page').then(m => m.RestaurantInfoPage)
      },
      {
        path: 'receipt',
        loadComponent: () => import('../settings/receipt/receipt.page').then(m => m.ReceiptPage)
      },
      {
        path: 'meal-bill',
        loadComponent: () => import('../settings/meal-bill/meal-bill.page').then(m => m.MealBillPage)
      },
      {
        path: 'customer-type',
        loadComponent: () => import('../settings/customer-type/customer-type.page').then(m => m.CustomerTypePage)
      },
      {
        path: 'employee',
        loadComponent: () => import('../settings/employee/employee.page').then(m => m.EmployeePage)
      },
      {
        path: 'expiration',
        loadComponent: () => import('../settings/expiration/expiration.page').then(m => m.ExpirationPage)
      },
      {
        path: 'other',
        loadComponent: () => import('../settings/other/other.page').then(m => m.OtherPage)
      },
      {
        path: '',
        redirectTo: 'restaurant-info',
        pathMatch: 'full'
      }
    ]
  },
];
