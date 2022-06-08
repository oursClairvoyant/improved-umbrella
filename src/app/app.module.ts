import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VisualisationListComponent } from './visualisation-list/visualisation-list.component';
import { VisualisationDetailsComponent } from './visualisation-details/visualisation-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisualisationListComponent,
    VisualisationDetailsComponent,
    CocktailContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
