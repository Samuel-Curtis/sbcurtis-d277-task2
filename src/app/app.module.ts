import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateHeaderComponent } from './Pages/State/components/state-header/state-header.component';
// PrimeNg Module Imports
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { VirginiaPageComponent } from './Pages/State/virginia-page/virginia-page.component';
import { StateLandingSectionComponent } from './Pages/State/sections/state-landing-section/state-landing-section.component';
import { StateFunFactsComponent } from './Pages/State/components/state-fun-facts/state-fun-facts.component'
import { StateSideNavComponent } from './Pages/State/components/state-side-nav/state-side-nav.component';
import { WhyVirginiaSectionComponent } from './Pages/State/sections/why-virginia-section/why-virginia-section.component';
import { ExploreOurCitiesSectionComponent } from './Pages/State/sections/explore-our-cities-section/explore-our-cities-section.component';
import { WhyVirginiaTileComponent } from './Pages/State/components/why-virginia-tile/why-virginia-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    StateHeaderComponent,
    StateSideNavComponent,
    VirginiaPageComponent,
    StateLandingSectionComponent,
    StateLandingSectionComponent,
    StateFunFactsComponent,
    WhyVirginiaSectionComponent,
    ExploreOurCitiesSectionComponent,
    WhyVirginiaTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // PrimeNg Modules
    SidebarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
