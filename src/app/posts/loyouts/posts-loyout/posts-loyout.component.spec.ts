import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsLoyoutComponent } from './posts-loyout.component';

describe('PostsLoyoutComponent', () => {
  let component: PostsLoyoutComponent;
  let fixture: ComponentFixture<PostsLoyoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsLoyoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsLoyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
