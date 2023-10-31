import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { VirginiaPageComponent } from './Pages/State/virginia-page/virginia-page.component';
import { CityPageComponent } from './Pages/City/city-page/city-page.component';
import { CitationsPageComponent } from './Pages/Citations/citations-page/citations-page.component';

const routes: Routes = [
  {
    path: '',
    component: VirginiaPageComponent
  },
  {
    path: 'city/:city',
    component: CityPageComponent
  },
  {
    path: 'citations',
    component: CitationsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {scrollPositionRestoration: 'enabled'}
    )],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
