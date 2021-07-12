import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CreateKneipentourComponent } from './kneipentour/create-kneipentour/create-kneipentour.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import { SelectKneipenlisteComponent } from './kneipentour/select-kneipenliste/select-kneipenliste.component';
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CookieService} from "ngx-cookie-service";
import { ListKneipentourComponent } from './kneipentour/list-kneipentour/list-kneipentour.component';
import {MatTabsModule} from "@angular/material/tabs";
import { OwnKneipentourenComponent } from './kneipentour/list-kneipentour/own-kneipentouren/own-kneipentouren.component';
import { ViewerKneipentourComponent } from './kneipentour/viewer-kneipentour/viewer-kneipentour.component';
import { TourstepperComponent } from './kneipentour/viewer-kneipentour/tourstepper/tourstepper.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    CreateKneipentourComponent,
    SelectKneipenlisteComponent,
    ListKneipentourComponent,
    OwnKneipentourenComponent,
    ViewerKneipentourComponent,
    TourstepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
