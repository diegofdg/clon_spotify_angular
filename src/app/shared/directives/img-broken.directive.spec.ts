import { ImgBrokenDirective } from './img-broken.directive';
import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock">'
})
class TestComponent {
  public srcMock: any = null;
}

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[
        TestComponent,
        ImgBrokenDirective
      ]        
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('💤 TestComponent debería instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('❌ Directiva debería de cambiar la imagen por una por defecto', (done: DoneFn) => {
    const beforeImgElement =fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
    const beforeImgSrc = beforeImgElement.src;
    component.srcMock = undefined;

    setTimeout(()=>{
      const afterImgElement =fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
      const afterImgSrc = beforeImgElement.src;      

      //expect(afterImgSrc).toMatch('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAFpJREFUGFcdjDESgzAMwOSh2XGHhP9/x3yBLHAkA84Og3upZklitsVXlU9KvM+DuyN7rTHcySXTro6qIsd5hARcvbGWlYnUvcY9bkou9NZZpmlmMZP0f774cH63ui2zholL5wAAAABJRU5ErkJggg==')
      expect(afterImgSrc).toMatch(/\bdata:image\b/)
      done();

    }, 3000);
  });
});
