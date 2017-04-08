import {Component, Input} from '@angular/core';

@Component({
  selector    : 'mw-image-switcher',
  templateUrl : 'app/image-switcher.component.html',
  styleUrls   : ['app/image-switcher.component.css']
})
export class ImageSwitcher{
  @Input() index;
  @Input() images;
};