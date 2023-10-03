import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddClothesComponent } from './add-clothes/add-clothes.component';

const routes: Routes = [
  { path: 'add-clothes', component: AddClothesComponent },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
