import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  temperature = 24;

  onMouseOver(option: string) {
    if (option === 'warm') {
      document.body.style.backgroundColor = '#FFCABF';
    } else if (option === 'cold') {
      document.body.style.backgroundColor = '#BFDAFF';
    }
  }

  onMouseOut() {
    document.body.style.backgroundColor = '#FAF3DD';
  }
}
