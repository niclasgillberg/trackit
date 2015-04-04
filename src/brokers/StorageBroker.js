import {LocalStorageProvider} from '../providers/storage/local-storage-provider';

export class StorageBroker {
  static inject() { return [[LocalStorageProvider]]; };
  constructor(storageProviders) {
    this.storageProvider = storageProviders.filter((x) => x.canRun())[0];
  }
}