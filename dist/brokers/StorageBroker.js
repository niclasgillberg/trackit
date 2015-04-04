System.register(["../providers/storage/local-storage-provider"], function (_export) {
  var LocalStorageProvider, _createClass, _classCallCheck, StorageBroker;

  return {
    setters: [function (_providersStorageLocalStorageProvider) {
      LocalStorageProvider = _providersStorageLocalStorageProvider.LocalStorageProvider;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      StorageBroker = _export("StorageBroker", (function () {
        function StorageBroker(storageProviders) {
          _classCallCheck(this, StorageBroker);

          this.storageProvider = storageProviders.filter(function (x) {
            return x.canRun();
          })[0];
        }

        _createClass(StorageBroker, null, {
          inject: {
            value: function inject() {
              return [[LocalStorageProvider]];
            }
          }
        });

        return StorageBroker;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb2tlcnMvU3RvcmFnZUJyb2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsb0JBQW9CLGlDQUVmLGFBQWE7Ozs7QUFGbEIsMEJBQW9CLHlDQUFwQixvQkFBb0I7Ozs7Ozs7OztBQUVmLG1CQUFhO0FBRWIsaUJBRkEsYUFBYSxDQUVaLGdCQUFnQixFQUFFO2dDQUZuQixhQUFhOztBQUd0QixjQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUM7bUJBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtXQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RTs7cUJBSlUsYUFBYTtBQUNqQixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7YUFBRTs7OztlQUR6QyxhQUFhIiwiZmlsZSI6ImJyb2tlcnMvU3RvcmFnZUJyb2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9