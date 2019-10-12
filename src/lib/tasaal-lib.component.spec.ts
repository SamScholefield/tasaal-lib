import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasaalLibComponent } from './tasaal-lib.component';

describe('TasaalLibComponent', () => {
  let component: TasaalLibComponent;
  let fixture: ComponentFixture<TasaalLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasaalLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasaalLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
