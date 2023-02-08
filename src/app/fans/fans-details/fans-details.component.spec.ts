import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FansDetailsComponent } from './fans-details.component';

describe('FansDetailsComponent', () => {
  let component: FansDetailsComponent;
  let fixture: ComponentFixture<FansDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FansDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FansDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
