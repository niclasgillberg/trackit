import {LocalStorageProvider} from './local-storage-provider';

export function install(aurelia) {
  aurelia.withSingleton('storageProvider', LocalStorageProvider);
}