import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesCoverComponent } from './modules-cover.component';

describe('ModulesCoverComponent', () => {
  let component: ModulesCoverComponent;
  let fixture: ComponentFixture<ModulesCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
