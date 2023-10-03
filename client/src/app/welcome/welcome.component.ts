import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  temperature = 24;

  constructor(private router: Router) {}

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

  redirectToAddClothes() {
    this.router.navigate(['/add-clothes']);
  }
}
