import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPAComponent } from './empa.component';

describe('EMPAComponent', () => {
  let component: EMPAComponent;
  let fixture: ComponentFixture<EMPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMPAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
