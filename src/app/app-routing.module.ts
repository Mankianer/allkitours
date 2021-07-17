import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CreateKneipentourComponent} from "./kneipentour/create-kneipentour/create-kneipentour.component";
import {ListKneipentourComponent} from "./kneipentour/list-kneipentour/list-kneipentour.component";
import {ViewerKneipentourComponent} from "./kneipentour/viewer-kneipentour/viewer-kneipentour.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kneipentour/create', component: CreateKneipentourComponent },
  { path: 'kneipentour/list', component: ListKneipentourComponent },
  { path: 'kneipentour/view/:id', component: ViewerKneipentourComponent },
  { path: 'login', component: LoginComponent },
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
