import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionValideeComponent } from './transaction-validee.component';

describe('TransactionValideeComponent', () => {
  let component: TransactionValideeComponent;
  let fixture: ComponentFixture<TransactionValideeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionValideeComponent]
    });
    fixture = TestBed.createComponent(TransactionValideeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
