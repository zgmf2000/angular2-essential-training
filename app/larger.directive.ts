import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwLarger]'
})
export class LargerDirective {
  @HostBinding('class.is-larger') large = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.large = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.large = false;
  }
}
