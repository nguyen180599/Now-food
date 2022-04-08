import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from "../../layout/header/header.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
  ],
})
export class PagesModule {
}
