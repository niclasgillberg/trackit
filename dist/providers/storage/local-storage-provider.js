System.register(['aurelia-framework'], function (_export) {
  var Metadata, _classCallCheck, _createClass, LocalStorageProvider;

  return {
    setters: [function (_aureliaFramework) {
      Metadata = _aureliaFramework.Metadata;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      LocalStorageProvider = (function () {
        function LocalStorageProvider() {
          _classCallCheck(this, LocalStorageProvider);
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

        return LocalStorageProvider;
      })();

      _export('LocalStorageProvider', LocalStorageProvider);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9zdG9yYWdlL2xvY2FsLXN0b3JhZ2UtcHJvdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjsrQ0FFYSxvQkFBb0I7Ozs7bUNBRnpCLFFBQVE7Ozs7Ozs7OztBQUVILDBCQUFvQjtpQkFBcEIsb0JBQW9CO2dDQUFwQixvQkFBb0I7OztxQkFBcEIsb0JBQW9COztpQkFLekIsa0JBQUc7QUFDUCxnQkFBSTtBQUNGLHFCQUFPLGNBQWMsSUFBSSxNQUFNLElBQUksTUFBTSxhQUFnQixLQUFLLElBQUksQ0FBQzthQUNwRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1YscUJBQU8sS0FBSyxDQUFDO2FBQ2Q7V0FDRjs7O2lCQUVJLGVBQUMsR0FBRyxFQUFFO0FBQ1QsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7V0FDOUM7OztpQkFFRyxjQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDZix3QkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1dBQ2xEOzs7aUJBbEJjLG9CQUFHO0FBQ2hCLG1CQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztXQUM5Qzs7O2VBSFUsb0JBQW9COzs7c0NBQXBCLG9CQUFvQiIsImZpbGUiOiJwcm92aWRlcnMvc3RvcmFnZS9sb2NhbC1zdG9yYWdlLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=