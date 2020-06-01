import { TestBed } from '@angular/core/testing';

import { CodeBreakerService } from './code-breaker.service';

describe('CodeBreakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeBreakerService = TestBed.get(CodeBreakerService);
    expect(service).toBeTruthy();
  });
});
