import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Wizard } from '../models/wizard';

@Injectable()
export class WizardService {

    constructor(private http: Http) {}

    wizardUrl = '/api/wizards.json';
    singleWizardUrl = '/api/wizard.json';

    getWizards(): Observable<Wizard[]> {
        return this.http.get(this.wizardUrl)
            .map(this.extractData)
            .catch(this.handleError);

    }

    getWizard(id: number): Observable<Wizard> {
        return this.http.get(this.singleWizardUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }    

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }    

} 