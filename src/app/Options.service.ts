import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private optionsSource =  {
    bob: [`Bob.1`, `Bob.2`, `Bob.3`, `Bob.4`, `Bob.5`],
    mary: [`Mary.1`, `Mary.2`, `Mary.3`, `Mary.4`, `Mary.5`],
    sadiq: [`Sadiq.1`, `Sadiq.2`, `Sadiq.3`, `Sadiq.4`, `Sadiq.5`],
  };
  private loadedOptions = {
    bob: [`Bob.1`, `Bob.2`, `Bob.3`, `Bob.4`, `Bob.5`],
  };
  getOptions(key): Promise<unknown> {
    const optionsAlreadyLoaded = Object.keys(this.loadedOptions).includes(
      key
    );

    return new Promise((resolve) => {
      if (optionsAlreadyLoaded) {
        resolve(this.loadedOptions[key]);
      } else {
        setTimeout(() => {
          this.loadedOptions[key] = this.optionsSource[key];
          resolve(this.loadedOptions[key]);
        }, 1500);
      }
    });
  }
}
