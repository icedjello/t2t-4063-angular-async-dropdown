export class DataService {
  private optionsSource;
  private loadedOptions;
  constructor(optionsSource, loadedOptions) {
    this.optionsSource = optionsSource;
    this.loadedOptions = loadedOptions;
  }

  getValue = function(key) {
    const optionsAlreadyLoaded = Object.keys(this.loadedOptions).includes(
      key
    );

    const result = new Promise((resolve) => {
      if (optionsAlreadyLoaded) {
        console.log(
          'Already loaded. sending:',
          this.loadedOptions[key]
        );
        resolve(this.loadedOptions[key]);
      } else {
        console.log('Not loaded. will send.');
        setTimeout(() => {
          this.loadedOptions[key] = this.optionsSource[key];
          console.log(
            'Now loaded. sending:',
            this.loadedOptions[key]
          );

          resolve(this.loadedOptions[key]);
        }, 1500);
      }
    });
    return result;
  };
}


// import {Injectable} from '@angular/core';
// import {Observable, Subject} from 'rxjs';
//
// @Injectable({providedIn: 'root'})
//
//
// export class DataService {
//   private optionsSource = {
//     bob: [`Bob.1`, `Bob.2`, `Bob.3`, `Bob.4`, `Bob.5`],
//     mary: [`Mary.1`, `Mary.2`, `Mary.3`, `Mary.4`, `Mary.5`],
//     sadiq: [`Sadiq.1`, `Sadiq.2`, `Sadiq.3`, `Sadiq.4`, `Sadiq.5`],
//   };
//   private loadedOptions = {
//     bob: [`Bob.1`, `Bob.2`, `Bob.3`, `Bob.4`, `Bob.5`],
//   };
//   // constructor() {
//   //   this.deltaSubject.subscribe(delta => {
//   //     this.count += delta;
//   //     this.countSubject.next(this.count);
//   //   });
//   // }
//   // private count = 0;
//   // private deltaSubject = new Subject<number>();
//   // countSubject = new Subject<number>();
//   //
//   // publishDelta(delta: number) {
//   //   this.deltaSubject.next(delta);
//   // }
//
//   constructor() {
//
//   }
//   getValue(key:string){
//     console.log('getValue');
//   }
// }
