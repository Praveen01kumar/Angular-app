import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerficationDialogComponent } from './verfication-dialog.component';

describe('VerficationDialogComponent', () => {
  let component: VerficationDialogComponent;
  let fixture: ComponentFixture<VerficationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerficationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerficationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
