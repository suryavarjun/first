import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenviewPage } from './benview.page';

describe('BenviewPage', () => {
  let component: BenviewPage;
  let fixture: ComponentFixture<BenviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
