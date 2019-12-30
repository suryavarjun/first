import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinnViewPage } from './finn-view.page';

describe('FinnViewPage', () => {
  let component: FinnViewPage;
  let fixture: ComponentFixture<FinnViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinnViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinnViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
