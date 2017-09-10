/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AootodoComponent } from './aootodo.component';

describe('AootodoComponent', () => {
  let component: AootodoComponent;
  let fixture: ComponentFixture<AootodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AootodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AootodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
