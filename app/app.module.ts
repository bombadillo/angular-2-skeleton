import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';

import './rxjs-operators';
import { NgbModule }             from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }          from './app.component';
import { DashboardComponent }    from './dashboard/dashboard.component';
import { WizardsComponent }      from './wizards/wizards.component';
import { WizardDetailComponent } from './wizards/detail/wizard-detail.component';
import { WizardService }         from './wizards/services/wizard.service';
import { AlertsComponent }       from './alerts/alerts.component';

import { AppRoutingModule }      from './app-routing.module';

@NgModule({
  imports:      [ 
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule    
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    WizardsComponent,
    WizardDetailComponent,
    AlertsComponent  
  ],
  providers: [
    WizardService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }