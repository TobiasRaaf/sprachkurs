import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { DictComponent } from './dict/dict.component';
import { TestComponent } from './test/test.component';
import { MaterialsComponent } from './materials/materials.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { AddFormComponent } from './dict/add-form/add-form.component';
import { NomenComponent } from './dict/add-form/nomen/nomen.component';
import { VerbComponent } from './dict/add-form/verb/verb.component';
import { PrepositionComponent } from './dict/add-form/preposition/preposition.component';
import { ConjunctionComponent } from './dict/add-form/conjunction/conjunction.component';
import { AdjectiveComponent } from './dict/add-form/adjective/adjective.component';
import { OthersComponent } from './dict/add-form/others/others.component';
import { KeysPipe } from './dict/entry.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DictComponent,
    TestComponent,
    MaterialsComponent,
    AccountComponent,
    HomeComponent,
    AddFormComponent,
    NomenComponent,
    VerbComponent,
    PrepositionComponent,
    ConjunctionComponent,
    AdjectiveComponent,
    OthersComponent,
    KeysPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
