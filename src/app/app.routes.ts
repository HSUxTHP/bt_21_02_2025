import { Routes } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {DetailComponent} from './page/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:number',
    component: DetailComponent
  },
];
