import { Injectable } from '@angular/core';
import { State, Selector } from '@ngxs/store';

interface MaterialStateModel {
  components: string[];
}

@State<MaterialStateModel>({
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
