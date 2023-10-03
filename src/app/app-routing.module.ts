import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirginiaPageComponent } from './Pages/State/virginia-page/virginia-page.component';

const routes: Routes = [
  {
    path: '',
    component: VirginiaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
