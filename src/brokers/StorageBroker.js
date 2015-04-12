import {All, inject} from 'aurelia-framework';

@inject(All.of('storageProvider'))
export class StorageBroker {
  constructor(storageProviders) {
    this.storageProvider = storageProviders.filter((x) => x.canRun())[0];
  }

  fetch(key) {
    return this.storageProvider.fetch(key);
  }

  save(key, value) {
    return this.storageProvider.save(key, value);
  }
}