import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';
import { Wizard }                     from './models/wizard';
import { WizardService }              from './services/wizard.service';

@Component({
  selector: 'my-wizard-detail',
  templateUrl: '/app/wizards/wizard-detail.component.html' 
})

export class WizardDetailComponent implements OnInit {

  constructor(
    private wizardService: WizardService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input()
  wizard: Wizard;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.wizardService.getWizard(id).subscribe(wizard =>{
        this.wizard = wizard
      });
    }); 
  }

  goBack(): void {
    this.location.back();
  }

}
