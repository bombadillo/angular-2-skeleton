import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Transformer } from '../models/Transformer'

@Injectable()
export class TransformersService {
  private url = '/app/data/transformers.json';

  constructor(
    private http: Http
  ) { }

  getTransformers(): Observable<Transformer[]> {
    return this.http.get(this.url)
      .map((response: Response) => <Transformer[]>response.json())
      .do(data => console.log(data));
  }
}