import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTASection } from './ctasection';

describe('CTASection', () => {
  let component: CTASection;
  let fixture: ComponentFixture<CTASection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTASection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTASection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
