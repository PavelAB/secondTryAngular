import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo7bisComponent } from './exo7bis.component';

describe('Exo7bisComponent', () => {
  let component: Exo7bisComponent;
  let fixture: ComponentFixture<Exo7bisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo7bisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo7bisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
