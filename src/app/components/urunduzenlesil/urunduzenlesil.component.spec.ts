/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrunduzenlesilComponent } from './urunduzenlesil.component';

describe('UrunduzenlesilComponent', () => {
  let component: UrunduzenlesilComponent;
  let fixture: ComponentFixture<UrunduzenlesilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunduzenlesilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunduzenlesilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
