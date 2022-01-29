import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('🔴 Esta imagen revento -->', this.elHost);
    if(this.customImg) {
      elNative.src = this.customImg;
    } else {
      //elNative.src = '/assets/images/img-broken.png';
      elNative.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAFpJREFUGFcdjDESgzAMwOSh2XGHhP9/x3yBLHAkA84Og3upZklitsVXlU9KvM+DuyN7rTHcySXTro6qIsd5hARcvbGWlYnUvcY9bkou9NZZpmlmMZP0f774cH63ui2zholL5wAAAABJRU5ErkJggg==';      
    }
  }

  constructor(private elHost: ElementRef) {

  }
}