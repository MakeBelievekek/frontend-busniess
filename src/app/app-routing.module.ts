import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartCompanyComponent} from './components/start/startCompany.component';

const routes: Routes = [
  {path: '', component: StartCompanyComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

