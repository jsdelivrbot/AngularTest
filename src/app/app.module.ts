import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AbilityCardComponent } from './ability-card/ability-card.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ModifierPipe } from './modifier.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AbilityCardComponent,
    HeroesComponent,
    HeroDetailComponent,
    ModifierPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
