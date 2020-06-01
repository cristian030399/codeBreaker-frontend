import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBrakerComponent } from './code-braker.component';

describe('CodeBrakerComponent', () => {
  let component: CodeBrakerComponent;
  let fixture: ComponentFixture<CodeBrakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBrakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBrakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
