import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrls: ['./add-clothes.component.scss',],
})
export class AddClothesComponent {
  clothForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.clothForm = this.fb.group({
      clothName: ['', Validators.required],
      usableInWarmWeather: [false],
      usableInColdWeather: [false],
    });
  }

  addCloth() {
    console.log('Cloth Form:', this.clothForm.value);
  }
}