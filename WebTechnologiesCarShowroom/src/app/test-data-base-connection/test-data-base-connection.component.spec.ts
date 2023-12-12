import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataBaseConnectionComponent } from './test-data-base-connection.component';

describe('TestDataBaseConnectionComponent', () => {
  let component: TestDataBaseConnectionComponent;
  let fixture: ComponentFixture<TestDataBaseConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDataBaseConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDataBaseConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
