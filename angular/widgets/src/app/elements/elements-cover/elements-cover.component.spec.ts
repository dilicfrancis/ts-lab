import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsCoverComponent } from './elements-cover.component';

describe('ElementsCoverComponent', () => {
  let component: ElementsCoverComponent;
  let fixture: ComponentFixture<ElementsCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
