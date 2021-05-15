import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamIconComponent } from './jam-icon.component';

describe('JamIconComponent', () => {
  let component: JamIconComponent;
  let fixture: ComponentFixture<JamIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
