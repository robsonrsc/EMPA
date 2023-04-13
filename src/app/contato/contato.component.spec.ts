import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contatocomponent } from "./contato.component";

describe('ContatoComponent', () => {
  let component: contatocomponent;
  let fixture: ComponentFixture<contatocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ contatocomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(contatocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
