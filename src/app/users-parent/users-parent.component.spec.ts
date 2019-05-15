import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersParentComponent } from './users-parent.component';

describe('UsersParentComponent', () => {
  let component: UsersParentComponent;
  let fixture: ComponentFixture<UsersParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
