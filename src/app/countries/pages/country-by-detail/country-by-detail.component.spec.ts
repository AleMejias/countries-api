import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryByDetailComponent } from './country-by-detail.component';

describe('CountryByDetailComponent', () => {
  let component: CountryByDetailComponent;
  let fixture: ComponentFixture<CountryByDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryByDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryByDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
