import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>()

  myObservable$1: BehaviorSubject<any> = new BehaviorSubject('🐱‍🏍🐱‍🏍🐱‍🏍');

  /* myObservable$1: Subject<any> = new Subject(); */
  /* myObservable1$: Observable<any> = new Observable(); */

  constructor() {

    setTimeout(() => {
      this.myObservable$1.next('🐱‍🏍🐱‍🏍🐱‍🏍');      
    },1000);

    setTimeout(() => {
      this.myObservable$1.error('🛑🛑🛑');      
    },2000);

    /* this.myObservable1$ = new Observable(
      (observer: Observer<any>) => {
        observer.next('🐱‍🏍🐱‍🏍🐱‍🏍')

        setTimeout(() => {
          observer.complete()
        }, 1500)

        setTimeout(() => {
          observer.next('🐱‍🏍🐱‍🏍🐱‍🏍')
        }, 2500)

        setTimeout(() => {
          observer.error('🛑🛑🛑')
        }, 3500)
      }); */
  }
}