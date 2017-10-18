import { ProductComponent } from './product.component';

export const routes = [
  { path: '', children: [
    { path: '', component: ProductComponent },
    { path: 'child-product', loadChildren: './child-product#ChildProductModule' }
  ]},
];
