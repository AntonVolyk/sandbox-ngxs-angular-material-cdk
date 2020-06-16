import { Injectable } from '@angular/core';
import { State, Selector, Store } from '@ngxs/store';

@State<object>({
    name: 'lazy',
    defaults: ['lazy']
})
@Injectable()
export class LazyStore {

}
