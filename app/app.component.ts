import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from "@angular/http";
import 'rxjs/Rx';
import {Button} from 'primeng/primeng';

import { HomeComponent } from './home/home.component';
import { TransformersComponent } from './transformers/transformers.component';
import { TransformersService } from './transformers/services/transformers.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.template.html',
  directives: [ROUTER_DIRECTIVES, Button],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    TransformersService
  ]
})

@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/transformers',
    name: 'Transformers',
    component: TransformersComponent
  }
])

export class AppComponent {
  title = 'Angular 2 Skeleton';
}