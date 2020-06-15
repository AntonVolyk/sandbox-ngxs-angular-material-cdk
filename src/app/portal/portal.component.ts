import { A11yComponent } from './../a11y/a11y.component';
import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import {ComponentPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit, AfterViewInit {
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<SliderComponent | A11yComponent>;
  templatePortal: TemplatePortal<any>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  onSliderPortal() {
    this.selectedPortal = new ComponentPortal(SliderComponent);
  }

  onA11YPortal() {
    this.selectedPortal = new ComponentPortal(A11yComponent);
  }

  onTemplatePortal() {
    this.selectedPortal = new TemplatePortal(this.templatePortalContent, this.viewContainerRef);
  }

}
