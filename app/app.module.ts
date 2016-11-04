import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';

import './rxjs-operators';

import { AppComponent }          from './app.component';
import { DashboardComponent }    from './dashboard.component';
import { WizardsComponent }      from './wizards.component';
import { WizardDetailComponent } from './wizard-detail.component';
import { WizardService }         from './services/wizard.service';

import { AppRoutingModule }      from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    WizardsComponent,
    WizardDetailComponent    
  ],
  providers: [
    WizardService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }