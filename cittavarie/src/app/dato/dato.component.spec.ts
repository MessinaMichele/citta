import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoComponent } from './dato.component';

describe('DatoComponent', () => {
  let component: DatoComponent;
  let fixture: ComponentFixture<DatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatoComponent]
    });
    fixture = TestBed.createComponent(DatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creazione', () => {
    expect(component).toBeTruthy();
  });
});
