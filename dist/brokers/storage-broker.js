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

          this.storageProviders = storageProviders.filter(function (x) {
            return x.canRun();
          });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb2tlcnMvc3RvcmFnZS1icm9rZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLG9CQUFvQixpQ0FFZixhQUFhOzs7O0FBRmxCLDBCQUFvQix5Q0FBcEIsb0JBQW9COzs7Ozs7Ozs7QUFFZixtQkFBYTtBQUViLGlCQUZBLGFBQWEsQ0FFWixnQkFBZ0IsRUFBRTtnQ0FGbkIsYUFBYTs7QUFHdEIsY0FBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUM7bUJBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtXQUFBLENBQUMsQ0FBQztTQUNwRTs7cUJBSlUsYUFBYTtBQUNqQixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7YUFBRTs7OztlQUR6QyxhQUFhIiwiZmlsZSI6ImJyb2tlcnMvc3RvcmFnZS1icm9rZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==