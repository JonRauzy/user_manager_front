import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserDetail } from './get-user-detail';

describe('GetUserDetail', () => {
  let component: GetUserDetail;
  let fixture: ComponentFixture<GetUserDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUserDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(GetUserDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
