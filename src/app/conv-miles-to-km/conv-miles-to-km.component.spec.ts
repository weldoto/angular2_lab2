/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConvMilesToKmComponent } from './conv-miles-to-km.component';

describe('ConvMilesToKmComponent', () => {
  let component: ConvMilesToKmComponent;
  let fixture: ComponentFixture<ConvMilesToKmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvMilesToKmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvMilesToKmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
