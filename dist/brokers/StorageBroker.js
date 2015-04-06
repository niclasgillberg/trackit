System.register(["aurelia-framework"], function (_export) {
  var All, _createClass, _classCallCheck, StorageBroker;

  return {
    setters: [function (_aureliaFramework) {
      All = _aureliaFramework.All;
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

        _createClass(StorageBroker, {
          fetch: {
            value: function fetch(key) {
              return this.storageProvider.fetch(key);
            }
          },
          save: {
            value: function save(key, value) {
              return this.storageProvider.save(key, value);
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [All.of("storageProvider")];
            }
          }
        });

        return StorageBroker;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb2tlcnMvU3RvcmFnZUJyb2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsR0FBRyxpQ0FFRSxhQUFhOzs7O0FBRmxCLFNBQUcscUJBQUgsR0FBRzs7Ozs7Ozs7O0FBRUUsbUJBQWE7QUFFYixpQkFGQSxhQUFhLENBRVosZ0JBQWdCLEVBQUU7Z0NBRm5CLGFBQWE7O0FBR3RCLGNBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQzttQkFBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1dBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RFOztxQkFKVSxhQUFhO0FBTXhCLGVBQUs7bUJBQUEsZUFBQyxHQUFHLEVBQUU7QUFDVCxxQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4Qzs7QUFFRCxjQUFJO21CQUFBLGNBQUMsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNmLHFCQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM5Qzs7O0FBWE0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFENUMsYUFBYSIsImZpbGUiOiJicm9rZXJzL1N0b3JhZ2VCcm9rZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==