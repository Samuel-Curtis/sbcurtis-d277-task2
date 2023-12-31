import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateHeaderComponent } from './Pages/State/components/state-header/state-header.component';
// PrimeNg Module Imports
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { VirginiaPageComponent } from './Pages/State/virginia-page/virginia-page.component';
import { StateLandingSectionComponent } from './Pages/State/sections/state-landing-section/state-landing-section.component';
import { FunFactsComponent } from './Shared/Components/fun-facts/fun-facts.component'
import { SideNavComponent } from './Shared/Components/side-nav/side-nav.component';
import { WhyVirginiaSectionComponent } from './Pages/State/sections/why-virginia-section/why-virginia-section.component';
import { ExploreOurCitiesSectionComponent } from './Pages/State/sections/explore-our-cities-section/explore-our-cities-section.component';
import { WhyVirginiaTileComponent } from './Pages/State/components/why-virginia-tile/why-virginia-tile.component';
import { CityPageComponent } from './Pages/City/city-page/city-page.component';
import { CityLandingComponent } from './Pages/City/sections/city-landing/city-landing.component';
import { ExploreCityComponent } from './Pages/City/sections/explore-city/explore-city.component';
import { CitySideNavComponent } from './Pages/City/components/city-side-nav/city-side-nav.component';
import { CityCategoryComponent } from './Pages/City/components/city-category/city-category.component';
import { VaMapComponent } from './Pages/State/components/va-map/va-map.component';
import { APP_BASE_HREF } from '@angular/common';
import { LearnMoreSectionComponent } from './Pages/State/sections/learn-more-section/learn-more-section.component';
import { CompareCitiesComponent } from './Pages/City/sections/compare-cities/compare-cities.component';
import { CitationsPageComponent } from './Pages/Citations/citations-page/citations-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StateHeaderComponent,
    SideNavComponent,
    VirginiaPageComponent,
    StateLandingSectionComponent,
    StateLandingSectionComponent,
    FunFactsComponent,
    WhyVirginiaSectionComponent,
    ExploreOurCitiesSectionComponent,
    WhyVirginiaTileComponent,
    CityPageComponent,
    CityLandingComponent,
    ExploreCityComponent,
    CitySideNavComponent,
    CityCategoryComponent,
    VaMapComponent,
    LearnMoreSectionComponent,
    CompareCitiesComponent,
    CitationsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // PrimeNg Modules
    SidebarModule,
    ButtonModule,
    CarouselModule,
    DialogModule,
    PaginatorModule,
    InputTextModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: "/sbcurtis-d277-task2/"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
