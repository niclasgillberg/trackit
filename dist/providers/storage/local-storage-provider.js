System.register(['aurelia-framework'], function (_export) {
  var singleton, _classCallCheck, _createClass, LocalStorageProvider;

  return {
    setters: [function (_aureliaFramework) {
      singleton = _aureliaFramework.singleton;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      LocalStorageProvider = (function () {
        function LocalStorageProvider() {
          _classCallCheck(this, _LocalStorageProvider);
        }

        _createClass(LocalStorageProvider, [{
          key: 'canRun',
          value: function canRun() {
            try {
              return 'localStorage' in window && window.localStorage !== null;
            } catch (e) {
              return false;
            }
          }
        }, {
          key: 'fetch',
          value: function fetch(key) {
            return JSON.parse(localStorage.getItem(key));
          }
        }, {
          key: 'save',
          value: function save(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
          }
        }], [{
          key: 'metadata',
          value: function metadata() {
            return Metadata.singleton('storageProvider');
          }
        }]);

        var _LocalStorageProvider = LocalStorageProvider;
        LocalStorageProvider = singleton('storageProvider')(LocalStorageProvider) || LocalStorageProvider;
        return LocalStorageProvider;
      })();

      _export('LocalStorageProvider', LocalStorageProvider);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9zdG9yYWdlL2xvY2FsLXN0b3JhZ2UtcHJvdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtnREFHYSxvQkFBb0I7Ozs7b0NBSHpCLFNBQVM7Ozs7Ozs7OztBQUdKLDBCQUFvQjtpQkFBcEIsb0JBQW9COzs7O3FCQUFwQixvQkFBb0I7O2lCQUt6QixrQkFBRztBQUNQLGdCQUFJO0FBQ0YscUJBQU8sY0FBYyxJQUFJLE1BQU0sSUFBSSxNQUFNLGFBQWdCLEtBQUssSUFBSSxDQUFDO2FBQ3BFLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDVixxQkFBTyxLQUFLLENBQUM7YUFDZDtXQUNGOzs7aUJBRUksZUFBQyxHQUFHLEVBQUU7QUFDVCxtQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztXQUM5Qzs7O2lCQUVHLGNBQUMsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNmLHdCQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7V0FDbEQ7OztpQkFsQmMsb0JBQUc7QUFDaEIsbUJBQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1dBQzlDOzs7b0NBSFUsb0JBQW9CO0FBQXBCLDRCQUFvQixHQURoQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FDaEIsb0JBQW9CLEtBQXBCLG9CQUFvQjtlQUFwQixvQkFBb0I7OztzQ0FBcEIsb0JBQW9CIiwiZmlsZSI6InByb3ZpZGVycy9zdG9yYWdlL2xvY2FsLXN0b3JhZ2UtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==