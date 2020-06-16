import { Component, OnInit } from '@angular/core';
import { MaterialState } from './store/material-state';
import { Select, Store} from '@ngxs/store';
import { Observable } from 'rxjs';
import { supportsPassiveEventListeners, supportsScrollBehavior, getSupportedInputTypes, Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Select(MaterialState.components) components$: Observable<string[]>;
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  title = 'material-cdk-ngxs';

  constructor(private store: Store, public platform: Platform) {}

  ngOnInit() {
    this.components$.subscribe(val => {
      console.log(val);
    });
  }

  onCheckStore() {
    console.log(this.store.snapshot());
  }

  projectContentChanged() {
    console.log('observer event of changing content');
  }

}
