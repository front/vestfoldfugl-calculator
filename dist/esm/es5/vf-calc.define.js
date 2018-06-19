// VfCalc: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './vf-calc.core.js';
import {
  VestfoldFuglCalc
} from './vf-calc.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    VestfoldFuglCalc
  ], opts);
}