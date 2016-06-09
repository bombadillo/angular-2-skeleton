import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from "@angular/http"
import 'rxjs/Rx';

import { HomeComponent } from './home/home.component';
import { ExampleComponent } from './example/example.component';
import { ExampleService } from './example/services/example.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.template.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    ExampleService
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
    path: '/example',
    name: 'Example',
    component: ExampleComponent
  }
])

export class AppComponent {
  title = 'Angular 2 Skeleton';
}