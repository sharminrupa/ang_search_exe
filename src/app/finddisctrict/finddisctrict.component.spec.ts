import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddisctrictComponent } from "./FinddisctrictComponent";

describe('FinddisctrictComponent', () => {
  let component: FinddisctrictComponent;
  let fixture: ComponentFixture<FinddisctrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinddisctrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinddisctrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
