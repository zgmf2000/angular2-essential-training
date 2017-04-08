import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {
  @Input() mediaItem;
  @Output() closePopUp = new EventEmitter();

  index = 1;

  switchImage(direction)
  {
    if (direction === "next")
      this.index++;
    else if (direction === "previous")
      this.index--;
    
    if (this.index < 1)
      this.index = this.images.length;
    else if (this.index > this.images.length)
      this.index = 1;
  }

  isVisible()
  {
    return (this.mediaItem)?"":"hidden";
  }

  toggleClose()
  {
    this.closePopUp.emit();
  }

  images = [
    {
      id  : 1,
      url : "media/01.png"
    },
    {
      id  : 2,
      url : "media/02.png"
    },
    {
      id  : 3,
      url : "media/03.png"
    },
    {
      id  : 4,
      url : "media/04.png"
    },
  ]
};