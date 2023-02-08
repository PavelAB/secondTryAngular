import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FansListComponent } from './fans-list.component';

describe('FansListComponent', () => {
  let component: FansListComponent;
  let fixture: ComponentFixture<FansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FansListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
