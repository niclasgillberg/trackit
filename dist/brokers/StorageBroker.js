System.register(['aurelia-framework'], function (_export) {
  var All, inject, _classCallCheck, _createClass, StorageBroker;

  return {
    setters: [function (_aureliaFramework) {
      All = _aureliaFramework.All;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      StorageBroker = (function () {
        function StorageBroker(storageProviders) {
          _classCallCheck(this, _StorageBroker);

          this.storageProvider = storageProviders.filter(function (x) {
            return x.canRun();
          })[0];
        }

        _createClass(StorageBroker, [{
          key: 'fetch',
          value: function fetch(key) {
            return this.storageProvider.fetch(key);
          }
        }, {
          key: 'save',
          value: function save(key, value) {
            return this.storageProvider.save(key, value);
          }
        }]);

        var _StorageBroker = StorageBroker;
        StorageBroker = inject(All.of('storageProvider'))(StorageBroker) || StorageBroker;
        return StorageBroker;
      })();

      _export('StorageBroker', StorageBroker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb2tlcnMvU3RvcmFnZUJyb2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO2tEQUdhLGFBQWE7Ozs7OEJBSGxCLEdBQUc7aUNBQUUsTUFBTTs7Ozs7Ozs7O0FBR04sbUJBQWE7QUFDYixpQkFEQSxhQUFhLENBQ1osZ0JBQWdCLEVBQUU7OztBQUM1QixjQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUM7bUJBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtXQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RTs7cUJBSFUsYUFBYTs7aUJBS25CLGVBQUMsR0FBRyxFQUFFO0FBQ1QsbUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7V0FDeEM7OztpQkFFRyxjQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDZixtQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7V0FDOUM7Ozs2QkFYVSxhQUFhO0FBQWIscUJBQWEsR0FEekIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUNyQixhQUFhLEtBQWIsYUFBYTtlQUFiLGFBQWE7OzsrQkFBYixhQUFhIiwiZmlsZSI6ImJyb2tlcnMvU3RvcmFnZUJyb2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9