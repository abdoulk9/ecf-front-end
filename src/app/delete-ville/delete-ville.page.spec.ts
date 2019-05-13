import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVillePage } from './delete-ville.page';

describe('DeleteVillePage', () => {
  let component: DeleteVillePage;
  let fixture: ComponentFixture<DeleteVillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVillePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
