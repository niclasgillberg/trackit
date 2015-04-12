System.register(['aurelia-framework'], function (_export) {
  var customElement, bindable, _classCallCheck, _createDecoratedClass, SubtleInput;

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      SubtleInput = (function () {
        var _instanceInitializers = {};

        function SubtleInput() {
          _classCallCheck(this, _SubtleInput);

          this.placeholder = _instanceInitializers.placeholder.call(this);
          this.type = _instanceInitializers.type.call(this);
          this.value = _instanceInitializers.value.call(this);
        }

        _createDecoratedClass(SubtleInput, [{
          key: 'placeholder',
          enumerable: true,
          decorators: [bindable],
          initializer: function () {
            return '';
          }
        }, {
          key: 'type',
          enumerable: true,
          decorators: [bindable],
          initializer: function () {
            return 'text';
          }
        }, {
          key: 'value',
          enumerable: true,
          decorators: [bindable],
          initializer: function () {
            return '';
          }
        }], null, _instanceInitializers);

        var _SubtleInput = SubtleInput;
        SubtleInput = customElement('subtle-input')(SubtleInput) || SubtleInput;
        return SubtleInput;
      })();

      _export('SubtleInput', SubtleInput);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL1N1YnRsZUlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dUVBR2EsV0FBVzs7Ozt3Q0FIaEIsYUFBYTttQ0FBRSxRQUFROzs7Ozs7Ozs7QUFHbEIsaUJBQVc7OztpQkFBWCxXQUFXOzs7ZUFDWixXQUFXLHlCQUFYLFdBQVc7ZUFDWCxJQUFJLHlCQUFKLElBQUk7ZUFDSixLQUFLLHlCQUFMLEtBQUs7Ozs4QkFISixXQUFXOzs7dUJBQ3JCLFFBQVE7O21CQUFlLEVBQUU7Ozs7O3VCQUN6QixRQUFROzttQkFBUSxNQUFNOzs7Ozt1QkFDdEIsUUFBUTs7bUJBQVMsRUFBRTs7OzsyQkFIVCxXQUFXO0FBQVgsbUJBQVcsR0FEdkIsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUNqQixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVc7Ozs2QkFBWCxXQUFXIiwiZmlsZSI6Il9jb21wb25lbnRzL1N1YnRsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=