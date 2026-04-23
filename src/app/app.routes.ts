import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { FaqComponent } from './components/faq/faq.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  }
];
