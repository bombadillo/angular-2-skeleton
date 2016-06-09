import { Component, OnInit } from '@angular/core';

import { ExampleService } from './services/example.service';
import { IWizard } from './models/wizard';

@Component({
  selector: 'example',
  templateUrl: '/app/example/example.component.html'
})

export class ExampleComponent implements OnInit {

  constructor(
    private exampleService: ExampleService
  ) {}

  title = 'Example Page';

  wizards: IWizard[];

  ngOnInit() {
    this.exampleService.getWizards()
      .subscribe(
        wizards => this.wizards = wizards,
        error => console.log(error)
      )
  }
}