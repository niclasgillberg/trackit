import {customElement, bindable} from 'aurelia-framework';

@customElement('subtle-input')
export class SubtleInput {
  @bindable placeholder = '';
  @bindable type = 'text';
  @bindable value = '';
}