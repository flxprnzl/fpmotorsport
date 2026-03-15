import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nordschleife } from './nordschleife';

describe('Nordschleife', () => {
  let component: Nordschleife;
  let fixture: ComponentFixture<Nordschleife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nordschleife],
    }).compileComponents();

    fixture = TestBed.createComponent(Nordschleife);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
