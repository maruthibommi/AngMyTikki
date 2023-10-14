import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintbillComponent } from './printbill.component';

describe('PrintbillComponent', () => {
  let component: PrintbillComponent;
  let fixture: ComponentFixture<PrintbillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintbillComponent]
    });
    fixture = TestBed.createComponent(PrintbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
