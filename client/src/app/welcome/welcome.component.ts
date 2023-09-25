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
      document.body.style.backgroundColor = '#E76F51';
    } else if (option === 'cold') {
      document.body.style.backgroundColor = 'rgba(62, 185, 224, 0.65)';
    }
  }

  onMouseOut() {
    document.body.style.backgroundColor = 'white';
  }
}
