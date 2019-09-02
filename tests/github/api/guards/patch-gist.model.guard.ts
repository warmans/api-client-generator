/* tslint:disable */
import {
  PatchGist,
} from '../models';

export function isPatchGist(arg: any): arg is PatchGist {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // files?: any
    ( typeof arg.files === 'undefined' || isany(arg.files) ) &&

    true
  );
}

