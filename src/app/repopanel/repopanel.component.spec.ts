import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepopanelComponent } from './repopanel.component';

describe('RepopanelComponent', () => {
  let component: RepopanelComponent;
  let fixture: ComponentFixture<RepopanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepopanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepopanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
