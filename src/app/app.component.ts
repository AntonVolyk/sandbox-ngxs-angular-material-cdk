import { Component, OnInit } from '@angular/core';
import { MaterialState } from './store/material-state';
import { Select} from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Select(MaterialState.components) components$: Observable<string[]>;

  title = 'material-cdk-ngxs';

  constructor() {}

  ngOnInit() {
    this.components$.subscribe(val => {
      console.log(val);
    });
    
  }

}
