import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBaseInterfaceComponent } from './data-base-interface.component';

describe('DataBaseInterfaceComponent', () => {
  let component: DataBaseInterfaceComponent;
  let fixture: ComponentFixture<DataBaseInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBaseInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBaseInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
