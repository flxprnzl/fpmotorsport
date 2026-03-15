import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzPage } from './datenschutz-page';

describe('DatenschutzPage', () => {
  let component: DatenschutzPage;
  let fixture: ComponentFixture<DatenschutzPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatenschutzPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DatenschutzPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
