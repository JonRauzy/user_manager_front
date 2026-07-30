import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NothingToShow } from './nothing-to-show';

describe('NothingToShow', () => {
  let component: NothingToShow;
  let fixture: ComponentFixture<NothingToShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NothingToShow],
    }).compileComponents();

    fixture = TestBed.createComponent(NothingToShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
