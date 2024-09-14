import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRedesComponent } from './btn-redes.component';

describe('BtnRedesComponent', () => {
  let component: BtnRedesComponent;
  let fixture: ComponentFixture<BtnRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnRedesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
