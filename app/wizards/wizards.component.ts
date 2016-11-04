import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Wizard }                   from './models/wizard';
import { WizardDetailComponent }    from './detail/wizard-detail.component';
import { WizardService }            from './services/wizard.service';

@Component({
  selector: 'my-wizards',
  templateUrl: '/app/wizards/wizards.component.html',
  providers: [WizardService]
})

export class WizardsComponent implements OnInit { 

  constructor(
    private wizardService: WizardService,
    private router: Router
  ) {}

  title = 'Angular Skeleton';  
  wizards: Wizard[];
  selectedWizard: Wizard;

  ngOnInit(): void {
    this.getWizards();
  }

  getWizards(): void {
    this.wizardService.getWizards().subscribe(wizards =>{
       this.wizards = wizards
    });
  }

  gotoDetail(wizard: Wizard): void {
    let link = ['/wizard', wizard.id];
    this.router.navigate(link);
  }

}