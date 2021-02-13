import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { StartCompanyComponent } from './components/start/startCompany.component';
import { BasicComponent } from './components/basic/basic.component';
import {BasicCompanyComponent} from './components/basic/basicCompany.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    StartCompanyComponent,
    BasicComponent,
    BasicCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
