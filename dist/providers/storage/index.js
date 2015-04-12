System.register(['./local-storage-provider'], function (_export) {
  var LocalStorageProvider;

  _export('install', install);

  function install(aurelia) {
    aurelia.withSingleton('storageProvider', LocalStorageProvider);
  }

  return {
    setters: [function (_localStorageProvider) {
      LocalStorageProvider = _localStorageProvider.LocalStorageProvider;
    }],
    execute: function () {
      'use strict';
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9zdG9yYWdlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxQkFFZ0IsT0FBTzs7QUFBaEIsV0FBUyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQy9CLFdBQU8sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztHQUNoRTs7OzttREFKTyxvQkFBb0IiLCJmaWxlIjoicHJvdmlkZXJzL3N0b3JhZ2UvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==