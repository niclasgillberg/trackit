System.register([], function (_export) {
  var _classCallCheck, _createClass, Guid;

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Guid = (function () {
        function Guid() {
          _classCallCheck(this, Guid);
        }

        _createClass(Guid, null, [{
          key: 'new',
          value: function _new() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
              var r = Math.random() * 16 | 0,
                  v = c == 'x' ? r : r & 3 | 8;
              return v.toString(16);
            });
          }
        }]);

        return Guid;
      })();

      _export('Guid', Guid);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9oZWxwZXJzL0d1aWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxJQUFJOzs7Ozs7Ozs7OztBQUFKLFVBQUk7aUJBQUosSUFBSTtnQ0FBSixJQUFJOzs7cUJBQUosSUFBSTs7aUJBQ0wsZ0JBQUc7QUFDWCxtQkFBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQ3pFLGtCQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUM7a0JBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFJLENBQUMsR0FBQyxDQUFHLEdBQUMsQ0FBRyxBQUFDLENBQUM7QUFDM0QscUJBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN2QixDQUFDLENBQUM7V0FDSjs7O2VBTlUsSUFBSTs7O3NCQUFKLElBQUkiLCJmaWxlIjoiX2hlbHBlcnMvR3VpZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9