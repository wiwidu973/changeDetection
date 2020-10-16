import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { PonyComponent } from './child/pony/pony.component';
import { ImageComponent } from './child/image/image.component';
import { RaceComponent } from './child/race/race.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PonyComponent,
    ImageComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
