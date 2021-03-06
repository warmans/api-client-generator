/* tslint:disable */
import {
  Commit,
} from '../models';

export function isCommit(arg: any): arg is Commit {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === '{ [key: string]: any }' ) &&
  // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === '{ [key: string]: any }' ) &&
  // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === '{ [key: string]: any }' ) &&
  // files?: { [key: string]: any }[]
    ( typeof arg.files === 'undefined' || (Array.isArray(arg.files) && arg.files.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // parents?: { [key: string]: any }[]
    ( typeof arg.parents === 'undefined' || (Array.isArray(arg.parents) && arg.parents.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
  // stats?: { [key: string]: any }
    ( typeof arg.stats === 'undefined' || typeof arg.stats === '{ [key: string]: any }' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

