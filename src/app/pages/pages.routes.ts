import { PagesComponent } from './pages.component';

export const routes = [
  { path: '', children: [
    { path: '', component: PagesComponent },
    { path: 'child-page', loadChildren: './child-page#ChildPageModule' }
  ]},
];
