import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksSection } from './how-it-works-section';

describe('HowItWorksSection', () => {
  let component: HowItWorksSection;
  let fixture: ComponentFixture<HowItWorksSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItWorksSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItWorksSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
