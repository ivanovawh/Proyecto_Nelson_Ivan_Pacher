import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnsComponent } from './hns.component';

describe('HnsComponent', () => {
  let component: HnsComponent;
  let fixture: ComponentFixture<HnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
