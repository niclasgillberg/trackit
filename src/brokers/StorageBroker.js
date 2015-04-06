import {All} from 'aurelia-framework';

export class StorageBroker {
  static inject() { return [All.of('storageProvider')]; };
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