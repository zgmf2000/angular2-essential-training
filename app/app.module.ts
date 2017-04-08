import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { PopupComponent } from './popup.component';
import { ImageSwitcher } from './image-switcher.component';
import { LargerDirective } from './larger.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    PopupComponent,
    LargerDirective,
    ImageSwitcher
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}