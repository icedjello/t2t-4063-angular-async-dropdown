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
