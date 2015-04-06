export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()
    .plugin('./value_converters/index')
    .plugin('./providers/storage/index');

  aurelia.start().then(a => a.setRoot('app', document.body));
}