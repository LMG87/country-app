import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/country-layout/country-layout.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
