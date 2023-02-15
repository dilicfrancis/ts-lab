import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCoverComponent } from './collections-cover.component';

describe('CollectionsCoverComponent', () => {
  let component: CollectionsCoverComponent;
  let fixture: ComponentFixture<CollectionsCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
