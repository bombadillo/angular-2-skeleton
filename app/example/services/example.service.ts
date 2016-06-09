import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IWizard } from '../models/wizard';

@Injectable()
export class ExampleService {

  private wizardUrl = '/app/data/wizards.json';

  constructor(
    private http: Http
  ) {}

  getWizards() {
    return this.http.get(this.wizardUrl)
      .map((response: Response) => <IWizard[]>response.json())
      .do(data => console.log(data));
  }
}