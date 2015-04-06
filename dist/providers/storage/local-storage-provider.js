System.register(["aurelia-framework"], function (_export) {
  var Metadata, _createClass, _classCallCheck, LocalStorageProvider;

  return {
    setters: [function (_aureliaFramework) {
      Metadata = _aureliaFramework.Metadata;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      LocalStorageProvider = _export("LocalStorageProvider", (function () {
        function LocalStorageProvider() {
          _classCallCheck(this, LocalStorageProvider);
        }

        _createClass(LocalStorageProvider, {
          canRun: {
            value: function canRun() {
              try {
                return "localStorage" in window && window.localStorage !== null;
              } catch (e) {
                return false;
              }
            }
          },
          fetch: {
            value: function fetch(key) {
              return JSON.parse(localStorage.getItem(key));
            }
          },
          save: {
            value: function save(key, value) {
              localStorage.setItem(key, JSON.stringify(value));
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Metadata.singleton("storageProvider");
            }
          }
        });

        return LocalStorageProvider;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9zdG9yYWdlL2xvY2FsLXN0b3JhZ2UtcHJvdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsaUNBRUgsb0JBQW9COzs7O0FBRnpCLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRUgsMEJBQW9CO2lCQUFwQixvQkFBb0I7Z0NBQXBCLG9CQUFvQjs7O3FCQUFwQixvQkFBb0I7QUFLL0IsZ0JBQU07bUJBQUEsa0JBQUc7QUFDUCxrQkFBSTtBQUNGLHVCQUFPLGNBQWMsSUFBSSxNQUFNLElBQUksTUFBTSxhQUFnQixLQUFLLElBQUksQ0FBQztlQUNwRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1YsdUJBQU8sS0FBSyxDQUFDO2VBQ2Q7YUFDRjs7QUFFRCxlQUFLO21CQUFBLGVBQUMsR0FBRyxFQUFFO0FBQ1QscUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDOUM7O0FBRUQsY0FBSTttQkFBQSxjQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDZiwwQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2xEOzs7QUFsQk0sa0JBQVE7bUJBQUEsb0JBQUc7QUFDaEIscUJBQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzlDOzs7O2VBSFUsb0JBQW9CIiwiZmlsZSI6InByb3ZpZGVycy9zdG9yYWdlL2xvY2FsLXN0b3JhZ2UtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==