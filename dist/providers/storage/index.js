System.register(["./local-storage-provider"], function (_export) {
  var LocalStorageProvider;

  _export("install", install);

  function install(aurelia) {
    aurelia.withSingleton("storageProvider", LocalStorageProvider);
  }

  return {
    setters: [function (_localStorageProvider) {
      LocalStorageProvider = _localStorageProvider.LocalStorageProvider;
    }],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9zdG9yYWdlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxvQkFBb0I7O3FCQUVaLE9BQU87O0FBQWhCLFdBQVMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUMvQixXQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDLENBQUM7R0FDaEU7Ozs7QUFKTywwQkFBb0IseUJBQXBCLG9CQUFvQiIsImZpbGUiOiJwcm92aWRlcnMvc3RvcmFnZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9