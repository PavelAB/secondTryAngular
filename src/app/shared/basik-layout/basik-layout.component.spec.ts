import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasikLayoutComponent } from './basik-layout.component';

describe('BasikLayoutComponent', () => {
  let component: BasikLayoutComponent;
  let fixture: ComponentFixture<BasikLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasikLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasikLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
