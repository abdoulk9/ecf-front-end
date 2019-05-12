import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVillePage } from './select-ville.page';

describe('SelectVillePage', () => {
  let component: SelectVillePage;
  let fixture: ComponentFixture<SelectVillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVillePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
