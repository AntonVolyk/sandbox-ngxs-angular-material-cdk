import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-a11y',
  templateUrl: './a11y.component.html',
  styleUrls: ['./a11y.component.scss']
})
export class A11yComponent implements OnInit {
  originMessage: string;
  subtreeMessage: string;

  constructor(private _ngZone: NgZone, private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onCdkElementFocusChanged(event) {
    this.originMessage = event ? `${event} focused` : 'blurred';
    this.markForCheck();
  }

  onCdkSubtreeFocusChanged(event) {
    this.subtreeMessage = event ? `${event} focused` : 'blurred';
    this.markForCheck();
  }

  private markForCheck() {
    this._ngZone.run(() => {
      this._cdr.markForCheck();
    });
  }

}
