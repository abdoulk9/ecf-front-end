import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVillePage } from './update-ville.page';

describe('UpdateVillePage', () => {
  let component: UpdateVillePage;
  let fixture: ComponentFixture<UpdateVillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVillePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
