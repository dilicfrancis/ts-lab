import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsCoverComponent } from './views-cover.component';

describe('ViewsCoverComponent', () => {
  let component: ViewsCoverComponent;
  let fixture: ComponentFixture<ViewsCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
