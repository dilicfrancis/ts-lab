import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvefmComponent } from './solvefm.component';

describe('SolvefmComponent', () => {
  let component: SolvefmComponent;
  let fixture: ComponentFixture<SolvefmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolvefmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolvefmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
