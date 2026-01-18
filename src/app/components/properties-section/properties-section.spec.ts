import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSection } from './properties-section';

describe('PropertiesSection', () => {
  let component: PropertiesSection;
  let fixture: ComponentFixture<PropertiesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
