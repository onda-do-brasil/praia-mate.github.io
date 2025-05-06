import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', title: 'accueil', component: HomeComponent },
  { path: 'product', title: 'le produit', component: ProductComponent },
  { path: 'product', title: 'le produit', component: ProductComponent },
  { path: 'history', title: 'notre histoire', component: HistoryComponent },
  { path: 'blog', title: 'blog', component: BlogComponent },
  { path: 'contact', title: 'contact', component: ContactComponent },
];
