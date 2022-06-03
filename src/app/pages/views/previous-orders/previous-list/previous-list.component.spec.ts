import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousListComponent } from './previous-list.component';

describe('PreviousListComponent', () => {
  let component: PreviousListComponent;
  let fixture: ComponentFixture<PreviousListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
