import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirginiaPageComponent } from './Pages/State/virginia-page/virginia-page.component';
import { CityPageComponent } from './Pages/City/city-page/city-page.component';

const routes: Routes = [
  {
    path: '',
    component: VirginiaPageComponent
  },
  {
    path: 'city',
    component: CityPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
