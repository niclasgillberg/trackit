System.register([], function (_export) {
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator().plugin("./value_converters/index").plugin("./providers/storage/index");

    aurelia.start().then(function (a) {
      return a.setRoot("app", document.body);
    });
  }

  return {
    setters: [],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt1QkFBZ0IsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxHQUFHLENBQ1Isc0JBQXNCLEVBQUUsQ0FDeEIsZ0JBQWdCLEVBQUUsQ0FDbEIsTUFBTSxFQUFFLENBQ1IsZUFBZSxFQUFFLENBQ2pCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUNsQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQzs7QUFFdkMsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0dBQzVEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==