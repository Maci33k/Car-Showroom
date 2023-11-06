import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAdminComponent } from './log-admin.component';

describe('LogAdminComponent', () => {
  let component: LogAdminComponent;
  let fixture: ComponentFixture<LogAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogAdminComponent]
    });
    fixture = TestBed.createComponent(LogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
