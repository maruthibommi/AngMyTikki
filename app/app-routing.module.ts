import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BillComponent } from './bill/bill.component';
import { PrintbillComponent } from './printbill/printbill.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'home', component: HomepageComponent},
  {path: 'navbar', component: NavbarComponent},
  {path:'newbill', component: PrintbillComponent},
  {path:'printbill', component: PrintbillComponent},
  {path:'bill', component: BillComponent},
  { path: '', redirectTo: '/navbar', pathMatch: 'full' },
  { path: '**', redirectTo: '/navbar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
