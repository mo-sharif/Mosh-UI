import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsExampleComponent } from './colors-example.component';

describe('ColorsExampleComponent', () => {
  let component: ColorsExampleComponent;
  let fixture: ComponentFixture<ColorsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
