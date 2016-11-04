import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-alert',
  templateUrl: '/app/alerts/alerts.component.html'
})

export class AlertsComponent {

  @Input()
  message: string;

  onClose() {
    this.message = undefined;
  }

}
