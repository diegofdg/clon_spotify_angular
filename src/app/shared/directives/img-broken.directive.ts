import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('🔴 Esta imagen revento -->', this.elHost);
    //elNative.src = this.customImg
    elNative.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
  }

  constructor(private elHost: ElementRef) {

  }
}