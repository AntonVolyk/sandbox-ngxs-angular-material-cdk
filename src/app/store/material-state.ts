import { Injectable } from "@angular/core";
import { State, Selector } from '@ngxs/store';

interface MaterialStateModel {
    components: string[];
}

@State<object>({
    name: 'material',
    defaults: {
        components: ['slider']
    }
})
@Injectable()
export class MaterialState {
  @Selector()
  static components(state: MaterialStateModel) {
    return state.components;
  }
}
