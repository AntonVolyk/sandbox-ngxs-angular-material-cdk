import { Injectable } from '@angular/core';
import { State, Selector } from '@ngxs/store';

@State<object>({
    name: 'lazy',
    defaults: ['lazy']
})
@Injectable()
export class LazyStore {

}
