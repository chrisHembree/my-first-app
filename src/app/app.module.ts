import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageCreatorComponent } from './image-creator/image-creator.component';
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCreatorComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
