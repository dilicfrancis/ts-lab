import { TestBed } from '@angular/core/testing';

import { TryInterceptor } from './try.interceptor';

describe('TryInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TryInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TryInterceptor = TestBed.inject(TryInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
