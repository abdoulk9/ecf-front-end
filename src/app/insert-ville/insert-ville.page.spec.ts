import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVillePage } from './insert-ville.page';

describe('InsertVillePage', () => {
  let component: InsertVillePage;
  let fixture: ComponentFixture<InsertVillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertVillePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertVillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
