import { Component, OnInit }       from '@angular/core';
import { DataTable } from 'primeng/primeng';
import { Column } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { Button } from 'primeng/primeng';

import { TransformersService } from './services/transformers.service';
import { Transformer } from './models/transformer';

@Component({
    selector: 'transformers',
    templateUrl: '/app/transformers/transformers.template.html',
    directives: [DataTable, Column, Footer, Button]
})

export class TransformersComponent implements OnInit {
    title = "Transformers";
    transformers: Transformer[];
    cols: any[];
    displayDialog: boolean;
    selectedTransformer: Transformer;

    constructor(
        private transformersService: TransformersService
    ) { }

    getTransformers() {
        this.transformersService.getTransformers().subscribe(
            transformers => this.onTransformers(transformers),
            error => console.log(error)
        )
    }
    
    onTransformers(transformers) {        
        this.transformers = transformers;
        console.log(this.transformers);
    }

    ngOnInit() {
        this.getTransformers();

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'name', header: 'Name' },
            { field: 'faction', header: 'Faction' }
        ];
    }
    
    onRowSelect(event) {
        console.log('test');
        this.displayDialog = true;
    }    
    
    showDialogToAdd() {
        this.displayDialog = true;
    }
}