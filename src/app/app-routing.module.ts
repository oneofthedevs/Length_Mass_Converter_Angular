import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LenghtComponent } from "./lenght/lenght.component";
import { MassComponent } from "./mass/mass.component";

const routes: Routes = [
  {path: '', component: LenghtComponent},
  {path: 'mass', component: MassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
