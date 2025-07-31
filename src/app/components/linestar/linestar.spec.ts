import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linestar } from './linestar';

describe('Linestar', () => {
  let component: Linestar;
  let fixture: ComponentFixture<Linestar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linestar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Linestar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
