import {singleton} from 'aurelia-framework';

@singleton('storageProvider')
export class LocalStorageProvider {
  static metadata() {
    return Metadata.singleton('storageProvider');
  }

  canRun() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }

  fetch(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}